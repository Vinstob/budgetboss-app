import React, { useState, useEffect } from 'react';
import { EXPENSE_CATEGORIES } from '../constants';
import '../styles/ExpenseForm.css';

function ExpenseForm({ onSubmit, expense, currency, isPro, onCancel }) {
  const [formData, setFormData] = useState({
    amount: '',
    category: 'food',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        amount: expense.amount.toString(),
        category: expense.category,
        description: expense.description || '',
        date: expense.date.toISOString().split('T')[0]
      });
    }
  }, [expense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date(formData.date)
    });
    setFormData({
      amount: '',
      category: 'food',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const categoryInfo = EXPENSE_CATEGORIES.find(cat => cat.id === formData.category);

  return (
    <div className="expense-form-container">
      <div className="expense-form">
        <h2>{expense ? '✏️ Editar Gasto' : '➕ Nuevo Gasto'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="amount">Monto ({currency})</label>
              <input
                id="amount"
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Fecha</label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {EXPENSE_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
            {categoryInfo && (
              <div className="category-preview">
                <span>{categoryInfo.icon} {categoryInfo.name}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción (Opcional)</label>
            <input
              id="description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ej: Almuerzo con amigos"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save">
              {expense ? '💾 Actualizar' : '✓ Guardar'}
            </button>
            {expense && (
              <button
                type="button"
                className="btn-cancel"
                onClick={onCancel}
              >
                ✕ Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
