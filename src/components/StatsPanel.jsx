import React from 'react';
import { CURRENCIES } from '../constants';
import { formatCurrencySymbol } from '../utils/formatCurrency';
import '../styles/StatsPanel.css';

function StatsPanel({ stats, monthName, currency, isPro }) {
  const currencyInfo = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  const getTotalPercentage = () => {
    if (!stats.total) return 0;
    return (stats.count || 0);
  };

  const topCategoryColor = stats.topCategory ? '#FF6B6B' : '#95A5A6';

  return (
    <div className="stats-panel">
      <div className="stats-container">
        {/* Total de Gastos */}
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <p className="stat-label">Total de Gastos</p>
            <p className="stat-value">
              <span className="currency-symbol">{currencyInfo.symbol}</span>
              {formatCurrencySymbol(stats.total || 0, currency)}
            </p>
            <p className="stat-subtitle">{monthName}</p>
          </div>
        </div>

        {/* Cantidad de Gastos */}
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <p className="stat-label">Cantidad de Gastos</p>
            <p className="stat-value">{stats.count || 0}</p>
            <p className="stat-subtitle">registros este mes</p>
          </div>
        </div>

        {/* Gasto Promedio */}
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <p className="stat-label">Promedio por Gasto</p>
            <p className="stat-value">
              <span className="currency-symbol">{currencyInfo.symbol}</span>
              {stats.count > 0 ? formatCurrencySymbol(stats.total / stats.count, currency) : '0'}
            </p>
            <p className="stat-subtitle">por transacción</p>
          </div>
        </div>

        {/* Top Categoría */}
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <p className="stat-label">Categoría Mayor</p>
            <p className="stat-value">
              {stats.topCategory?.name || 'N/A'}
            </p>
            <p className="stat-subtitle">
              <span className="currency-symbol">{currencyInfo.symbol}</span>
              {formatCurrencySymbol(stats.topCategory?.amount || 0, currency)}
            </p>
          </div>
        </div>
      </div>

      {!isPro && (
        <div className="pro-banner">
          <p>✨ <strong>Actualiza a Pro</strong> para ver gráficos avanzados, presupuestos y más</p>
          <button className="btn-pro">Upgrade Ahora</button>
        </div>
      )}
    </div>
  );
}

export default StatsPanel;
