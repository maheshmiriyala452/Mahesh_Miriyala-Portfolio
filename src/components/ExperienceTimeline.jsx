import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const ExperienceTimeline = ({ experience = [] }) => {
  return (
    <section id="experience" className="section-padding" aria-label="Professional Experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development internship focused on responsive web interfaces, performance optimization, and collaborative Git workflows.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline-wrapper">
              {experience.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div>
                        <h4 className="fw-bold mb-1 text-white">{item.role}</h4>
                        <span className="text-gradient fw-semibold" style={{ fontSize: '1.05rem' }}>
                          {item.company}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: '0.88rem' }}>
                        <span className="d-flex align-items-center gap-1">
                          <MapPin size={15} className="text-primary" />
                          {item.location}
                        </span>
                        <span className="badge-tech bg-primary-subtle text-primary border-primary">
                          <Calendar size={14} className="me-1" />
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Resume reported impact callout */}
                    <div className="p-3 my-3 rounded-3" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                      <div className="d-flex align-items-center gap-2 text-success fw-bold mb-1" style={{ fontSize: '0.85rem' }}>
                        <TrendingUp size={16} />
                        <span>Resume Reported Performance Metrics</span>
                      </div>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.88rem' }}>
                        Contributed to a <strong>35% reduction in page load times</strong> and a <strong>20% increase in mobile engagement</strong> through code refactoring, layout optimization, and asset cleansing.
                      </p>
                    </div>

                    {/* Bullet Points from Resume */}
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
                      {item.responsibilities?.map((resp, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.92rem' }}>
                          <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies used */}
                    <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary-subtle">
                      {item.technologies?.map((tech, idx) => (
                        <span key={idx} className="code-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
