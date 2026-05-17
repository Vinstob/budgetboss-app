import React from 'react';
import { CURRENCIES } from '../constants';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses, categories, currency, onEdit, onDelete }) {
  const currencyInfo = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-icon">📭</p>
        <p className="empty-text">No hay gastos para mostrar</p>
        <p className="empty-subtext">¡Agrega tu primer gasto!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <div className="list-header">
        <h3>📋 Gastos ({expenses.length})</h3>
      </div>

      <div className="expenses-container">
        {expenses.map(expense => {
          const category = getCategoryInfo(expense.category);
          return (
            <div key={expense.id} className="expense-item">
              <div className="expense-icon">
                {category?.icon || '💰'}
              </div>

              <div className="expense-details">
                <div className="expense-category">
                  {category?.name || 'Otros'}
                </div>
                {expense.description && (
                  <div className="expense-description">
                    {expense.description}
                  </div>
                )}
              </div>

              <div className="expense-date">
                {formatDate(expense.date)}
              </div>

              <div className="expense-amount">
                <span className="currency-symbol">{currencyInfo.symbol}</span>
                <span className="amount-value">
                  {parseFloat(expense.amount).toFixed(2)}
                </span>
              </div>

              <div className="expense-actions">
                <button
                  className="btn-edit"
                  onClick={() => onEdit(expense)}
                  title="Editar"
                >
                  ✏️
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(expense.id)}
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseList;
