import React from 'react';
import { Award, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

export const CertificationCard = ({ certifications = [] }) => {
  return (
    <section id="certifications" className="section-padding" aria-label="Certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={15} />
            <span>Credentials &amp; Learning</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications completed across Python programming, foundational computer science, data analytics, and networking.
          </p>
        </div>

        <div className="row g-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="col-lg-6">
              <div className="cert-card glass-card">
                <div>
                  <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                    <span className="badge-tech bg-primary-subtle text-primary border-primary">
                      {cert.badge || 'Verified Certification'}
                    </span>
                    <span className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.85rem' }}>
                      <Calendar size={14} />
                      {cert.completionDate}
                    </span>
                  </div>

                  <h4 className="fw-bold text-white mb-2">{cert.name}</h4>
                  <h6 className="text-gradient fw-semibold mb-3">{cert.organization}</h6>

                  <p className="text-secondary mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.55' }}>
                    {cert.description}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary-subtle">
                  <div className="d-flex align-items-center gap-1 text-success" style={{ fontSize: '0.85rem' }}>
                    <CheckCircle2 size={16} />
                    <span>Verified Credential</span>
                  </div>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-custom"
                      style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
                    >
                      <span>Verify</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                      Certificate on file
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationCard;
