import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const EducationCard = ({ education = [] }) => {
  return (
    <section id="education" className="section-padding" aria-label="Academic Education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Academics</span>
          </h2>
          <p className="section-subtitle">
            Bachelor of Technology in Electronics and Communication Engineering with academic excellence and active campus leadership.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            {education.map((item) => (
              <div key={item.id} className="glass-card p-4 p-md-5">
                <div className="row align-items-center gy-4">
                  <div className="col-md-8">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge-tech bg-primary-subtle text-primary border-primary">
                        <Calendar size={14} className="me-1" />
                        {item.duration}
                      </span>
                      <span className="badge-tech">
                        Class of {item.graduationYear}
                      </span>
                    </div>

                    <h3 className="fw-bold text-white mb-2">{item.degree}</h3>
                    <h5 className="text-gradient mb-3">{item.branch}</h5>

                    <h6 className="text-secondary fw-semibold mb-2">{item.institution}</h6>
                    <div className="d-flex align-items-center gap-1 text-muted mb-4" style={{ fontSize: '0.88rem' }}>
                      <MapPin size={15} className="text-primary flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-secondary mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.description}
                    </p>

                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {item.highlights?.map((h, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '0.9rem' }}>
                          <CheckCircle size={15} className="text-success flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="p-4 rounded-4" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-card)' }}>
                      <Award size={36} className="text-primary mb-2" />
                      <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.78rem', letterSpacing: '0.08em' }}>
                        Cumulative CGPA
                      </div>
                      <div className="display-5 fw-bold text-gradient my-1">
                        {item.cgpa}
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                        Scale: 10.0 Max
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
