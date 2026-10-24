import React from 'react';
import { FileText, Download, ExternalLink, Calendar, CheckCircle, Info } from 'lucide-react';

export const ResumeSection = ({ profile }) => {
  const resumeUrl = profile?.resumeUrl || '/resume/Mahesh_Miriyala_Resume.pdf';
  const lastUpdated = profile?.resumeLastUpdated || 'October 2026';

  return (
    <section id="resume" className="section-padding" aria-label="Resume Download and Overview">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FileText size={15} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Resume &amp; <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Download or view the verified one-page technical resume containing academic milestones, internship achievements, and project metrics.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="resume-preview-card glass-card">
              <div className="row align-items-center gy-4">
                <div className="col-md-7 text-md-start text-center">
                  <div className="d-inline-flex align-items-center gap-2 mb-3">
                    <span className="badge-tech bg-primary-subtle text-primary border-primary">
                      <Calendar size={13} className="me-1" />
                      Content Updated: {lastUpdated}
                    </span>
                    <span className="badge-tech bg-success-subtle text-success border-success">
                      <CheckCircle size={13} className="me-1" />
                      PDF Ready
                    </span>
                  </div>

                  <h3 className="fw-bold text-white mb-2">Miriyala Mahesh — Technical Resume</h3>
                  <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                    Standardized single-page PDF formatted for ATS scanners and engineering hiring managers. Includes full project architectures, metrics, and references.
                  </p>

                  <div className="d-flex flex-wrap align-items-center gap-3 justify-content-md-start justify-content-center">
                    <a
                      href={resumeUrl}
                      download="Mahesh_Miriyala_Resume.pdf"
                      className="btn-primary-custom"
                      title="Download Mahesh Miriyala's Resume PDF"
                    >
                      <Download size={18} />
                      <span>Download Resume (PDF)</span>
                    </a>

                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-custom"
                      title="View Resume in Browser Tab"
                    >
                      <ExternalLink size={18} />
                      <span>View Resume</span>
                    </a>
                  </div>

                  {/* Informational note for custom replacement */}
                  <div className="mt-4 p-3 rounded-3 text-start d-flex align-items-start gap-2" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', fontSize: '0.825rem' }}>
                    <Info size={18} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted">
                      <strong>Asset Location:</strong> The resume file is hosted locally at <code className="code-pill">/public/resume/Mahesh_Miriyala_Resume.pdf</code>. Both buttons link directly to this document.
                    </span>
                  </div>
                </div>

                <div className="col-md-5">
                  <div
                    className="p-4 rounded-4 text-start position-relative shadow-lg"
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                    }}
                  >
                    <div className="border-bottom border-secondary pb-3 mb-3">
                      <h5 className="fw-bold text-white mb-1">MIRIYALA MAHESH</h5>
                      <div className="text-primary fw-semibold" style={{ fontSize: '0.85rem' }}>
                        Aspiring Full Stack Developer
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.78rem' }}>
                        Hyderabad | +91 9391620253
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-uppercase fw-bold text-gradient mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        Core Technologies
                      </div>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-dark border border-secondary text-secondary" style={{ fontSize: '0.7rem' }}>Python</span>
                        <span className="badge bg-dark border border-secondary text-secondary" style={{ fontSize: '0.7rem' }}>Flask</span>
                        <span className="badge bg-dark border border-secondary text-secondary" style={{ fontSize: '0.7rem' }}>React.js</span>
                        <span className="badge bg-dark border border-secondary text-secondary" style={{ fontSize: '0.7rem' }}>MySQL</span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-uppercase fw-bold text-gradient mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        Education
                      </div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>
                        B.Tech ECE (2022–2026) • 8.0 CGPA
                      </div>
                    </div>

                    <div>
                      <div className="text-uppercase fw-bold text-gradient mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                        Internship
                      </div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>
                        Web Dev Intern @ Purple Technologies (-35% load time)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
