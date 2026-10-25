import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Hero = ({ profile }) => {
  const roles = profile?.typingRoles?.filter(r => r !== 'REST API Engineer') || [
    'Aspiring Full Stack Developer',
    'Python Developer',
    'React.js Developer',
    'B.Tech ECE Graduate (2026)'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentRoleIndex, roles]);

  const resumeUrl = profile?.resumeUrl || '/resume/Mahesh_Miriyala_Resume.pdf';
  const avatarUrl = profile?.avatar || '/images/mahesh-profile.png';

  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow-left"></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-5">
          {/* Left Column: Text & CTAs */}
          <div className="col-lg-7">
            <div className="hero-status-pill">
              <span className="status-indicator"></span>
              <span>Available for Entry-Level Full Stack &amp; Python Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Miriyala Mahesh</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="typing-container">
              <span>{currentText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              Resourceful 2026 B.Tech graduate in Electronics and Communication Engineering from{' '}
              <strong className="text-white">Vignan's Lara Institute of Technology and Science</strong> (CGPA 8.0/10).
              Passionate about building responsive client architectures in <strong className="text-white">React.js</strong>,
              scalable REST APIs in <strong className="text-white">Python &amp; Flask</strong>, and optimized data layers in{' '}
              <strong className="text-white">MySQL</strong>.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#projects" className="btn-primary-custom" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={resumeUrl}
                download="Mahesh_Miriyala_Resume.pdf"
                className="btn-secondary-custom"
                title="Download verified resume in PDF format"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="btn-outline-custom"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Badges */}
            <div className="d-flex flex-wrap align-items-center gap-4 pt-2">
              <div className="hero-social-links">
                <a
                  href={profile?.linkedin || 'https://www.linkedin.com/in/maheshmiriyala/'}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={profile?.github || 'https://github.com/maheshmiriyala'}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                  title="View GitHub Repositories"
                >
                  <Github size={20} />
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge-tech">Python 3</span>
                <span className="badge-tech">React.js</span>
                <span className="badge-tech">Flask REST</span>
                <span className="badge-tech">MySQL</span>
                <span className="badge-tech">Bootstrap 5</span>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar Showcase */}
          <div className="col-lg-5">
            <div className="hero-avatar-wrapper">
              <div className="avatar-frame">
                <img
                  src={avatarUrl}
                  alt="Miriyala Mahesh - Aspiring Full Stack Developer"
                  className="avatar-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/mahesh-profile.svg';
                  }}
                />
              </div>

              <div className="avatar-badge-float">
                <CheckCircle2 size={18} className="text-success" />
                <span className="fw-semibold" style={{ fontSize: '0.88rem' }}>
                  B.Tech ECE (2022–2026) • CGPA 8.0/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
