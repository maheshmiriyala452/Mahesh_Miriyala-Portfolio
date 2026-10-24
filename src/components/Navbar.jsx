import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (!isHome) {
      // If not on home, route will change; scroll after render handled by browser or path
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-custom" aria-label="Main Navigation">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Link to="/" className="navbar-brand-custom" onClick={() => setIsOpen(false)}>
          <span className="brand-dot"></span>
          <span>Miriyala <span className="text-gradient">Mahesh</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="d-none d-lg-flex align-items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>

          {isHome ? (
            <>
              <button
                type="button"
                className="nav-link-custom btn btn-link text-decoration-none"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button
                type="button"
                className="nav-link-custom btn btn-link text-decoration-none"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
              <button
                type="button"
                className="nav-link-custom btn btn-link text-decoration-none"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </>
          ) : (
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
          )}

          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          >
            Projects
          </NavLink>

          {isHome && (
            <button
              type="button"
              className="nav-link-custom btn btn-link text-decoration-none"
              onClick={() => scrollToSection('education')}
            >
              Education
            </button>
          )}

          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            title="Demo Admin Dashboard"
          >
            <Shield size={16} className="me-1" />
            Admin Demo
          </NavLink>
        </div>

        {/* Right side: Theme toggle and mobile burger */}
        <div className="d-flex align-items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-nav-btn d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="d-lg-none py-3 px-4 border-top border-secondary-subtle" style={{ background: 'var(--bg-secondary)' }}>
          <div className="d-flex flex-column gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {isHome ? (
              <>
                <button
                  type="button"
                  className="nav-link-custom btn btn-link text-decoration-none text-start"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
                <button
                  type="button"
                  className="nav-link-custom btn btn-link text-decoration-none text-start"
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </button>
                <button
                  type="button"
                  className="nav-link-custom btn btn-link text-decoration-none text-start"
                  onClick={() => scrollToSection('experience')}
                >
                  Experience
                </button>
              </>
            ) : (
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            )}

            <NavLink
              to="/projects"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>

            {isHome && (
              <button
                type="button"
                className="nav-link-custom btn btn-link text-decoration-none text-start"
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            )}

            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/admin"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Shield size={16} className="me-1" />
              Admin Demo
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
