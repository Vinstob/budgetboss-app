import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useExpenses } from '../hooks/useExpenses';
import { EXPENSE_CATEGORIES } from '../constants';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import StatsPanel from '../components/StatsPanel';
import '../styles/DashboardPage.css';

function DashboardPage() {
  const { user, userPreferences } = useAuth();
  const { expenses, loadMonthExpenses, addExpense, updateExpense, deleteExpense, getMonthStats } = useExpenses(user?.uid);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (user?.uid) {
      loadMonthExpenses(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    }
  }, [user?.uid, currentMonth]);

  const handleAddExpense = async (expenseData) => {
    try {
      await addExpense(expenseData);
      setShowForm(false);
    } catch (error) {
      console.error('Error al agregar gasto:', error);
    }
  };

  const handleUpdateExpense = async (id, updates) => {
    try {
      await updateExpense(id, updates);
      setEditingExpense(null);
    } catch (error) {
      console.error('Error al actualizar gasto:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este gasto?')) {
      try {
        await deleteExpense(id);
      } catch (error) {
        console.error('Error al eliminar gasto:', error);
      }
    }
  };

  const stats = getMonthStats();
  const monthName = currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  const filteredExpenses = filter === 'all'
    ? expenses
    : expenses.filter(exp => exp.category === filter);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>👑 Dashboard</h1>
          <p>¡Hola, {user?.displayName || 'Usuario'}!</p>
        </div>
        <button
          className="btn-add-expense"
          onClick={() => {
            setShowForm(!showForm);
            setEditingExpense(null);
          }}
        >
          {showForm ? '✕ Cerrar' : '+ Nuevo Gasto'}
        </button>
      </div>

      {showForm && (
        <ExpenseForm
          onSubmit={handleAddExpense}
          currency={userPreferences?.currency || 'PYG'}
          isPro={userPreferences?.plan === 'pro'}
        />
      )}

      {editingExpense && (
        <ExpenseForm
          onSubmit={(data) => handleUpdateExpense(editingExpense.id, data)}
          expense={editingExpense}
          currency={userPreferences?.currency || 'PYG'}
          isPro={userPreferences?.plan === 'pro'}
          onCancel={() => setEditingExpense(null)}
        />
      )}

      <StatsPanel
        stats={stats}
        monthName={monthName}
        currency={userPreferences?.currency || 'PYG'}
        isPro={userPreferences?.plan === 'pro'}
      />

      <div className="dashboard-content">
        <div className="month-navigator">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="btn-month"
          >
            ← Anterior
          </button>
          <span className="current-month">{monthName}</span>
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="btn-month"
          >
            Siguiente →
          </button>
        </div>

        <div className="filter-categories">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          {EXPENSE_CATEGORIES.slice(0, 5).map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              title={cat.name}
            >
              {cat.icon}
            </button>
          ))}
        </div>

        <ExpenseList
          expenses={filteredExpenses}
          categories={EXPENSE_CATEGORIES}
          currency={userPreferences?.currency || 'PYG'}
          onEdit={setEditingExpense}
          onDelete={handleDeleteExpense}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
