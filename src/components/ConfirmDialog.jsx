import React from 'react';
import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed? This action cannot be undone.',
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  isDestructive = true
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="450px">
      <div className="d-flex align-items-start gap-3 mb-4">
        <div
          className="rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0"
          style={{
            backgroundColor: isDestructive ? 'rgba(244, 63, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
            color: isDestructive ? '#f43f5e' : '#3b82f6'
          }}
        >
          <AlertTriangle size={24} />
        </div>
        <div>
          <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>{message}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn-secondary-custom" onClick={onClose}>
          {cancelLabel}
        </button>
        <button
          type="button"
          className="btn"
          onClick={onConfirm}
          style={{
            backgroundColor: isDestructive ? '#e11d48' : 'var(--accent-blue)',
            color: '#ffffff',
            fontWeight: 600,
            borderRadius: 'var(--radius-full)',
            padding: '0.65rem 1.4rem'
          }}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
