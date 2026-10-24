import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = '650px' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="modal-content-custom"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-custom">
          <h5 id="modal-title" className="m-0 fw-bold">{title}</h5>
          <button
            type="button"
            className="btn btn-sm text-muted p-1"
            onClick={onClose}
            aria-label="Close dialog"
            style={{ background: 'transparent', border: 'none' }}
          >
            <X size={20} />
          </button>
        </div>
        <div className="modal-body-custom">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
