import React from 'react';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';

export const AchievementCard = ({ achievements = [] }) => {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Users size={24} className="text-primary" />;
      case 1:
        return <Trophy size={24} className="text-warning" />;
      case 2:
        return <Star size={24} className="text-info" />;
      case 3:
      default:
        return <TrendingUp size={24} className="text-success" />;
    }
  };

  return (
    <section id="achievements" className="section-padding" aria-label="Achievements and Leadership">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={15} />
            <span>Honors &amp; Impact</span>
          </div>
          <h2 className="section-title">
            Achievements &amp; <span className="text-gradient">Leadership</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated campus initiative, institutional leadership awards, and cohort representation representing over 8,000 students.
          </p>
        </div>

        <div className="row g-4">
          {achievements.map((item, idx) => (
            <div key={item.id} className="col-lg-6 col-md-6">
              <div className="achievement-card glass-card">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="p-3 rounded-3"
                      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)' }}
                    >
                      {getIcon(idx)}
                    </div>
                    {item.metric && (
                      <span className="badge-tech bg-primary-subtle text-primary border-primary">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <h5 className="fw-bold text-white mb-2">{item.title}</h5>
                  <h6 className="text-gradient fw-semibold mb-3">{item.organization}</h6>
                  <p className="text-secondary mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.55' }}>
                    {item.description}
                  </p>
                </div>

                {item.impact && (
                  <div className="pt-3 border-top border-secondary-subtle">
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                      <strong className="text-white">Leadership Outcome:</strong> {item.impact}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCard;
