import React from 'react';
import { GraduationCap, Award, MapPin, Briefcase, Code, CheckCircle } from 'lucide-react';

export const About = ({ profile }) => {
  return (
    <section id="about" className="section-padding" aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Background &amp; Focus</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Miriyala Mahesh</span>
          </h2>
          <p className="section-subtitle">
            Solid analytical mindset grounded in Electronics &amp; Communication Engineering, dedicated to building responsive web applications and reliable RESTful backend systems.
          </p>
        </div>

        <div className="row gy-4 align-items-stretch">
          {/* Main Narrative Card */}
          <div className="col-lg-7">
            <div className="about-card glass-card d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold mb-3 text-white">Engineering Graduate &amp; Developer</h4>
                <p className="text-secondary mb-3" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  I am a 2026 Bachelor of Technology graduate in <strong className="text-white">Electronics and Communication Engineering</strong> from{' '}
                  <strong className="text-white">Vignan's Lara Institute of Technology and Science</strong>, holding a cumulative grade point average of{' '}
                  <span className="text-gradient fw-bold">8.0 / 10</span>.
                </p>
                <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  During my 3-month <strong className="text-white">Web Development Internship at Purple Technologies</strong> (Vijayawada), I developed optimized interfaces using HTML5, CSS3, and JavaScript, contributing to a reported <strong className="text-white">35% reduction in page load times</strong> and a <strong className="text-white">20% increase in mobile engagement</strong>.
                </p>
                <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  My core development stack centers around <strong className="text-white">Python</strong>, <strong className="text-white">Flask</strong>, <strong className="text-white">React.js</strong>, and <strong className="text-white">MySQL</strong>, complemented by data structures, algorithmic problem solving, and modern SDLC practices.
                </p>
              </div>

              {/* Quick Metadata Badges */}
              <div className="pt-3 border-top border-secondary-subtle">
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      <MapPin size={16} className="text-primary flex-shrink-0" />
                      <span><strong>Location:</strong> Hyderabad, India</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      <GraduationCap size={16} className="text-primary flex-shrink-0" />
                      <span><strong>Degree:</strong> B.Tech ECE (2022–2026)</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      <Briefcase size={16} className="text-primary flex-shrink-0" />
                      <span><strong>Internship:</strong> Purple Technologies</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      <Award size={16} className="text-primary flex-shrink-0" />
                      <span><strong>Academics:</strong> CGPA 8.0/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics / Highlights Grid */}
          <div className="col-lg-5">
            <div className="row g-3 h-100">
              <div className="col-6">
                <div className="about-stat-box h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat-number">8.0 / 10</div>
                  <div className="about-stat-label">B.Tech CGPA</div>
                  <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.8rem' }}>
                    Vignan's Lara Institute of Tech &amp; Science
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-stat-box h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat-number">2026</div>
                  <div className="about-stat-label">Graduation Year</div>
                  <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.8rem' }}>
                    Ready for immediate entry-level deployment
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-stat-box h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat-number text-success">35%</div>
                  <div className="about-stat-label">Load Time Cut</div>
                  <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.8rem' }}>
                    Reported at Purple Technologies internship
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="about-stat-box h-100 d-flex flex-column justify-content-center">
                  <div className="about-stat-number text-info">8,000+</div>
                  <div className="about-stat-label">Students Coordinated</div>
                  <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.8rem' }}>
                    Campus leadership award winner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
