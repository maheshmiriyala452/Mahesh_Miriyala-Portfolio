import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-custom" role="contentinfo">
      <div className="container">
        <div className="row gy-4 mb-4">
          <div className="col-lg-5 col-md-6">
            <h5 className="fw-bold text-white mb-2">Miriyala Mahesh</h5>
            <p className="text-gradient fw-semibold mb-3">Aspiring Full Stack Developer | Python Developer</p>
            <p style={{ fontSize: '0.96rem', maxWidth: '420px', color: '#f1f5f9', lineHeight: '1.65' }} className="mb-4">
              Resourceful B.Tech graduate (ECE '26) from Vignan's Lara Institute of Technology and Science, specializing in Python, Flask, SQL, React.js, and RESTful API solutions.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a
                href="https://www.linkedin.com/in/maheshmiriyala/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Mahesh Miriyala LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/maheshmiriyala"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Mahesh Miriyala GitHub profile"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:maheshmiriyala452@gmail.com"
                className="social-icon-btn"
                aria-label="Send email to Mahesh Miriyala"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919391620253"
                className="social-icon-btn"
                aria-label="Call Mahesh Miriyala"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.95rem' }}>
              <li><Link to="/" className="footer-nav-link">Home</Link></li>
              <li><Link to="/about" className="footer-nav-link">About Me</Link></li>
              <li><Link to="/projects" className="footer-nav-link">Featured Projects</Link></li>
              <li><Link to="/contact" className="footer-nav-link">Contact Me</Link></li>
              <li><Link to="/admin" className="footer-nav-link">Admin Dashboard Demo</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h6 className="text-white fw-bold mb-3">Location &amp; Availability</h6>
            <p className="mb-2" style={{ fontSize: '0.95rem', color: '#f1f5f9' }}>
              <strong className="text-white me-1">Base:</strong>
              <span>Hyderabad, India</span>
            </p>
            <p className="mb-2" style={{ fontSize: '0.95rem', color: '#f1f5f9' }}>
              <strong className="text-white me-1">Target Roles:</strong>
              <span>Full Stack Developer, Python Developer, Frontend Developer</span>
            </p>
            <p className="mb-3" style={{ fontSize: '0.95rem', color: '#f1f5f9' }}>
              <strong className="text-white me-1">Graduation:</strong>
              <span>2026 B.Tech ECE (Vignan's Lara)</span>
            </p>
            <div className="p-3 rounded-3" style={{ background: 'rgba(30, 41, 59, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', fontSize: '0.9rem' }}>
              <span className="text-gradient-cyan fw-bold d-block mb-1">Architecture Note:</span>
              <span style={{ color: '#f1f5f9', lineHeight: '1.5', display: 'block' }}>
                Built with React 18+, Bootstrap 5, and JSON Server mock REST backend. Designed for seamless production migration to Python Flask or Django.
              </span>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary-subtle pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
          <div style={{ color: '#f1f5f9' }}>
            &copy; {currentYear} Miriyala Mahesh. All rights reserved.
          </div>
          <div style={{ color: '#e2e8f0' }}>
            Designed &amp; engineered for technical recruiters and engineering teams.
          </div>
        </div>
      </div>

      {/* Floating Back to Top */}
      <button
        className={`back-to-top ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top of page"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
