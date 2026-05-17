import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ user, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          👑 BudgetBoss
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/settings"
            className={`nav-link ${isActive('/settings') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            ⚙️ Configuración
          </Link>

          <button
            className="nav-link theme-toggle"
            onClick={onThemeToggle}
            title="Cambiar tema"
          >
            🌙 Tema
          </button>

          <span className="nav-user">
            👤 {user?.displayName || 'Usuario'}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
