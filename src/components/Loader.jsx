import React from 'react';

export const Loader = ({ message = 'Loading content...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5" role="status">
      <div className="spinner-border text-primary mb-3" style={{ width: '2.5rem', height: '2.5rem' }} aria-hidden="true">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted fw-medium mb-0">{message}</p>
    </div>
  );
};

export default Loader;
