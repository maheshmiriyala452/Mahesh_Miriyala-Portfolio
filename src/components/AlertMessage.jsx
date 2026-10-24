import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const AlertMessage = ({
  type = 'info', // 'success', 'danger'/'error', 'warning', 'info'
  message,
  onClose
}) => {
  if (!message) return null;

  const config = {
    success: {
      icon: CheckCircle2,
      bg: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.3)',
      text: '#10b981'
    },
    error: {
      icon: AlertCircle,
      bg: 'rgba(244, 63, 94, 0.12)',
      border: 'rgba(244, 63, 94, 0.3)',
      text: '#f43f5e'
    },
    danger: {
      icon: AlertCircle,
      bg: 'rgba(244, 63, 94, 0.12)',
      border: 'rgba(244, 63, 94, 0.3)',
      text: '#f43f5e'
    },
    warning: {
      icon: AlertTriangle,
      bg: 'rgba(245, 158, 11, 0.12)',
      border: 'rgba(245, 158, 11, 0.3)',
      text: '#f59e0b'
    },
    info: {
      icon: Info,
      bg: 'rgba(59, 130, 246, 0.12)',
      border: 'rgba(59, 130, 246, 0.3)',
      text: '#3b82f6'
    }
  };

  const current = config[type] || config.info;
  const Icon = current.icon;

  return (
    <div
      className="d-flex align-items-center justify-content-between p-3 rounded-3 mb-3"
      style={{
        backgroundColor: current.bg,
        border: `1px solid ${current.border}`,
        color: 'var(--text-primary)'
      }}
      role="alert"
    >
      <div className="d-flex align-items-center gap-3">
        <Icon size={20} style={{ color: current.text, flexShrink: 0 }} />
        <span style={{ fontSize: '0.95rem' }}>{message}</span>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="btn btn-sm p-0 text-muted"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Close alert"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default AlertMessage;
