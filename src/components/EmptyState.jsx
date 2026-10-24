import React from 'react';
import { FolderSearch } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = FolderSearch,
  title = 'No items found',
  description = 'There are no records matching your criteria.',
  actionLabel,
  onAction
}) => {
  return (
    <div className="text-center py-5 px-3 glass-card my-4">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
        style={{ width: '64px', height: '64px', background: 'var(--accent-blue-light)', color: 'var(--accent-blue)' }}
      >
        <Icon size={32} />
      </div>
      <h4 className="fw-bold mb-2">{title}</h4>
      <p className="text-muted mx-auto mb-4" style={{ maxWidth: '450px' }}>
        {description}
      </p>
      {actionLabel && onAction && (
        <button className="btn-primary-custom" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
