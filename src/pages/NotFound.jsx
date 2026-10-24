import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="section-padding text-center">
      <div className="container">
        <div className="glass-card p-5 mx-auto" style={{ maxWidth: '550px' }}>
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ width: '70px', height: '70px', background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}
          >
            <Compass size={36} />
          </div>
          <h1 className="display-4 fw-bold text-gradient mb-2">404</h1>
          <h3 className="fw-bold text-white mb-3">Page Not Found</h3>
          <p className="text-muted mb-4" style={{ fontSize: '0.98rem' }}>
            The requested portfolio route or resource could not be found. It may have been moved or does not exist.
          </p>
          <Link to="/" className="btn-primary-custom justify-content-center">
            <Home size={18} />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
