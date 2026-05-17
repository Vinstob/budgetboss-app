import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const useExpenses = (userId) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar gastos del mes actual
  const loadMonthExpenses = async (year = new Date().getFullYear(), month = new Date().getMonth() + 1) => {
    if (!userId) return;

    try {
      setLoading(true);
      setError(null);

      // Obtener primer y último día del mes
      const firstDay = new Date(year, month - 1, 1);
      const lastDay = new Date(year, month, 0);

      const q = query(
        collection(db, `users/${userId}/expenses`),
        where('date', '>=', Timestamp.fromDate(firstDay)),
        where('date', '<=', Timestamp.fromDate(lastDay)),
        orderBy('date', 'desc')
      );

      const snapshot = await getDocs(q);
      const loadedExpenses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date?.toDate() || new Date()
      }));

      setExpenses(loadedExpenses);
    } catch (err) {
      setError(err.message);
      console.error('Error cargando gastos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar todos los gastos
  const loadAllExpenses = async () => {
    if (!userId) return;

    try {
      setLoading(true);
      setError(null);

      const q = query(
        collection(db, `users/${userId}/expenses`),
        orderBy('date', 'desc')
      );

      const snapshot = await getDocs(q);
      const loadedExpenses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date?.toDate() || new Date()
      }));

      setExpenses(loadedExpenses);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Agregar gasto
  const addExpense = async (expenseData) => {
    if (!userId) return;

    try {
      setError(null);
      const docRef = await addDoc(
        collection(db, `users/${userId}/expenses`),
        {
          ...expenseData,
          date: Timestamp.fromDate(new Date(expenseData.date)),
          createdAt: Timestamp.now()
        }
      );

      const newExpense = {
        id: docRef.id,
        ...expenseData,
        date: new Date(expenseData.date)
      };

      setExpenses(prev => [newExpense, ...prev]);
      return newExpense;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Actualizar gasto
  const updateExpense = async (expenseId, updates) => {
    if (!userId) return;

    try {
      setError(null);
      const expenseRef = doc(db, `users/${userId}/expenses`, expenseId);

      const updateData = { ...updates };
      if (updates.date) {
        updateData.date = Timestamp.fromDate(new Date(updates.date));
      }

      await updateDoc(expenseRef, updateData);

      setExpenses(prev =>
        prev.map(exp =>
          exp.id === expenseId
            ? { ...exp, ...updates, date: updates.date ? new Date(updates.date) : exp.date }
            : exp
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Eliminar gasto
  const deleteExpense = async (expenseId) => {
    if (!userId) return;

    try {
      setError(null);
      await deleteDoc(doc(db, `users/${userId}/expenses`, expenseId));
      setExpenses(prev => prev.filter(exp => exp.id !== expenseId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Calcular total de gastos
  const getTotalExpenses = (expensesList = null) => {
    const list = expensesList || expenses;
    return list.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
  };

  // Agrupar por categoría
  const groupByCategory = (expensesList = null) => {
    const list = expensesList || expenses;
    return list.reduce((grouped, exp) => {
      const category = exp.category;
      if (!grouped[category]) {
        grouped[category] = { total: 0, count: 0, expenses: [] };
      }
      grouped[category].total += parseFloat(exp.amount || 0);
      grouped[category].count += 1;
      grouped[category].expenses.push(exp);
      return grouped;
    }, {});
  };

  // Estadísticas del mes
  const getMonthStats = () => {
    const total = getTotalExpenses();
    const grouped = groupByCategory();
    const topCategory = Object.entries(grouped).sort(
      (a, b) => b[1].total - a[1].total
    )[0];

    return {
      total,
      count: expenses.length,
      topCategory: topCategory ? { name: topCategory[0], amount: topCategory[1].total } : null,
      grouped
    };
  };

  return {
    expenses,
    loading,
    error,
    loadMonthExpenses,
    loadAllExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
    getTotalExpenses,
    groupByCategory,
    getMonthStats
  };
};
