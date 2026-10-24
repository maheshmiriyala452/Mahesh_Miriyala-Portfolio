import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, MapPin, Briefcase, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import profileService from '../services/profileService';
import Loader from '../components/Loader';

export const AboutPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  if (loading) return <Loader message="Loading about page..." />;

  const resumeUrl = profile?.resumeUrl || '/resume/Mahesh_Miriyala_Resume.pdf';

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Profile &amp; Career Trajectory</span>
          </div>
          <h1 className="section-title">
            About <span className="text-gradient">Miriyala Mahesh</span>
          </h1>
          <p className="section-subtitle">
            B.Tech in Electronics &amp; Communication Engineering (2026) seeking entry-level Full Stack and Python Developer opportunities.
          </p>
        </div>

        {/* Narrative & Timeline */}
        <div className="row gy-4 mb-5">
          <div className="col-lg-8">
            <div className="glass-card p-4 p-md-5">
              <h3 className="fw-bold text-white mb-3">Academic Foundation &amp; Technical Focus</h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                I am a disciplined and analytical engineering student completing my Bachelor of Technology degree in{' '}
                <strong className="text-white">Electronics and Communication Engineering</strong> at{' '}
                <strong className="text-white">Vignan's Lara Institute of Technology and Science</strong> (2022–2026) with a CGPA of{' '}
                <strong className="text-gradient">8.0 / 10</strong>.
              </p>
              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                My engineering studies provided a robust grounding in mathematical modeling, digital logic, and algorithmic problem solving. Concurrently, I channeled my dedication toward modern software architecture—mastering <strong className="text-white">Python</strong>, <strong className="text-white">Flask</strong>, <strong className="text-white">React.js</strong>, and <strong className="text-white">MySQL</strong> to build full-stack web applications and robust REST APIs.
              </p>

              <h4 className="fw-bold text-white mb-3">Professional Internship at Purple Technologies - Vijayawada</h4>
              <p className="text-secondary mb-4" style={{ fontSize: '1.02rem', lineHeight: '1.8' }}>
                During my 3-month <strong className="text-white">Web Development Internship at Purple Technologies - Vijayawada</strong>, I translated mockups into responsive, accessible web interfaces. Through systematic debugging and AI-assisted refactoring, my work contributed to a reported <strong className="text-white">35% reduction in page load times</strong> and a <strong className="text-white">20% increase in mobile user engagement</strong>.
              </p>

              <h4 className="fw-bold text-white mb-3">Career Objective</h4>
              <p className="text-secondary mb-4" style={{ fontSize: '1.02rem', lineHeight: '1.8' }}>
                "Showcase my technical capabilities, projects, internship experience, certifications, and leadership achievements to recruiters. Encourage employers to contact me for suitable entry-level Full Stack Developer opportunities."
              </p>

              <div className="d-flex flex-wrap gap-3 pt-3 border-top border-secondary-subtle">
                <a href={resumeUrl} download className="btn-primary-custom">
                  <FileText size={18} />
                  <span>Download Resume (PDF)</span>
                </a>
                <Link to="/contact" className="btn-secondary-custom">
                  <span>Connect With Me</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="col-lg-4">
            <div className="glass-card p-4 mb-4">
              <h5 className="fw-bold text-white mb-3">Fast Facts</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ fontSize: '0.92rem' }}>
                <li className="d-flex justify-content-between border-bottom border-secondary-subtle pb-2">
                  <span className="text-muted">Full Name:</span>
                  <strong className="text-white">Miriyala Mahesh</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary-subtle pb-2">
                  <span className="text-muted">Degree:</span>
                  <strong className="text-white">B.Tech ECE (2026)</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary-subtle pb-2">
                  <span className="text-muted">Institution:</span>
                  <strong className="text-white">Vignan's LARA</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary-subtle pb-2">
                  <span className="text-muted">CGPA:</span>
                  <span className="text-gradient fw-bold">8.0 / 10</span>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary-subtle pb-2">
                  <span className="text-muted">Location:</span>
                  <strong className="text-white">Hyderabad, India</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-muted">Primary Stack:</span>
                  <strong className="text-white">Python, Flask, React, SQL</strong>
                </li>
              </ul>
            </div>

            <div className="glass-card p-4">
              <h5 className="fw-bold text-white mb-3">Leadership Highlights</h5>
              <div className="d-flex align-items-start gap-2 mb-3">
                <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  Coordinated institutional festivals for over <strong>8,000 students</strong>.
                </span>
              </div>
              <div className="d-flex align-items-start gap-2 mb-3">
                <CheckCircle2 size={18} className="text-warning mt-1 flex-shrink-0" />
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  Received <strong>Honorable Leadership Award</strong> from Dr. Lavu Rathaiah.
                </span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <CheckCircle2 size={18} className="text-success mt-1 flex-shrink-0" />
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  Served as primary liaison between faculty and student cohorts.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
