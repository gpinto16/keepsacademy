import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { GiGoalKeeper } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <Link className="navbar-brand" to="/home" onClick={() => setMenuOpen(false)}>
          <GiGoalKeeper className="navbar-brand-icon" />
          <div>
            <span className="navbar-brand-label">Keeps</span>
            <span className="navbar-brand-text">Academy</span>
          </div>
        </Link>

        <button className="navbar-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`} to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`} to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`} to="/trainers" onClick={() => setMenuOpen(false)}>
            Trainers
          </NavLink>
          <NavLink className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`} to="/exercises" onClick={() => setMenuOpen(false)}>
            Exercises
          </NavLink>
          <NavLink className={({ isActive }) => `navbar-link navbar-link-cta ${isActive ? 'active' : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};



