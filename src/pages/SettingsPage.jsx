import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { CURRENCIES, PLAN_FEATURES } from '../constants';
import '../styles/SettingsPage.css';

function SettingsPage() {
  const { user, userPreferences, updateUserPreferences, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState(userPreferences?.currency || 'PYG');
  const [saving, setSaving] = useState(false);

  const handleCurrencyChange = async (newCurrency) => {
    setSelectedCurrency(newCurrency);
    setSaving(true);
    try {
      await updateUserPreferences({ currency: newCurrency });
    } catch (error) {
      console.error('Error al cambiar moneda:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const currentPlan = userPreferences?.plan === 'pro' ? PLAN_FEATURES.pro : PLAN_FEATURES.free;

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>⚙️ Configuración</h1>

        {/* Información de Cuenta */}
        <div className="settings-section">
          <h2>Información de Cuenta</h2>
          <div className="setting-item">
            <label>Email</label>
            <p className="setting-value">{user?.email}</p>
          </div>
          <div className="setting-item">
            <label>Nombre</label>
            <p className="setting-value">{user?.displayName || 'No configurado'}</p>
          </div>
        </div>

        {/* Plan Actual */}
        <div className="settings-section">
          <h2>📊 Plan Actual</h2>
          <div className="plan-box">
            <h3>{currentPlan.name}</h3>
            <p className="plan-price">
              {currentPlan.price === 0 ? 'Gratis' : `$${currentPlan.price}/mes`}
            </p>
            {userPreferences?.plan === 'free' && (
              <button className="btn-upgrade">
                Actualizar a Pro
              </button>
            )}
            {userPreferences?.plan === 'pro' && (
              <p className="pro-badge">✨ Plan Pro Activo</p>
            )}
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <span className={currentPlan.budgets ? '✓' : '✗'}>Presupuestos</span>
            </div>
            <div className="feature-item">
              <span className={currentPlan.advancedGraphs ? '✓' : '✗'}>Gráficos Avanzados</span>
            </div>
            <div className="feature-item">
              <span className={currentPlan.customCategories ? '✓' : '✗'}>Categorías Personalizadas</span>
            </div>
            <div className="feature-item">
              <span className={currentPlan.pdfReports ? '✓' : '✗'}>Reportes PDF</span>
            </div>
            <div className="feature-item">
              <span className={currentPlan.noAds ? '✓' : '✗'}>Sin Anuncios</span>
            </div>
            <div className="feature-item">
              <span className={currentPlan.export ? '✓' : '✗'}>Exportar Datos</span>
            </div>
          </div>
        </div>

        {/* Preferencias */}
        <div className="settings-section">
          <h2>Preferencias</h2>
          <div className="setting-item">
            <label htmlFor="currency">Moneda Principal</label>
            <select
              id="currency"
              value={selectedCurrency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              disabled={saving}
            >
              {CURRENCIES.map(curr => (
                <option key={curr.code} value={curr.code}>
                  {curr.flag} {curr.name} ({curr.code})
                </option>
              ))}
            </select>
            {saving && <p className="saving-text">Guardando...</p>}
          </div>
        </div>

        {/* Acciones */}
        <div className="settings-section danger-zone">
          <h2>Acciones</h2>
          <button
            className="btn-logout"
            onClick={handleLogout}
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
