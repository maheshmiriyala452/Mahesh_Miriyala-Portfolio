import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import { Github } from './Icons';

export const ProjectCard = ({ project }) => {
  const defaultImage =
    project.id === 'ai-resume-analyzer'
      ? '/images/project-ai-resume.svg'
      : project.id === 'ecommerce-analytics'
      ? '/images/project-ecommerce-sql.svg'
      : project.id === 'rythumitra-360'
      ? '/images/project-rythumitra-360.svg'
      : '/images/project-spa-react.svg';

  return (
    <div className="project-card glass-card">
      {/* Visual illustration frame */}
      <div className="project-img-wrapper">
        <img
          src={project.image || defaultImage}
          alt={project.title}
          className="project-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
        <div className="project-category-overlay">
          {project.category}
        </div>
      </div>

      {/* Body content */}
      <div className="project-body">
        <h4 className="project-title">{project.title}</h4>
        {project.tagline && <p className="project-tagline">{project.tagline}</p>}

        <p className="project-summary">{project.summary}</p>

        {/* Reported Metrics from Resume */}
        {project.reportedResults && (
          <div className="project-metrics-pill">
            <div className="d-flex align-items-center gap-1 fw-semibold text-white mb-1" style={{ fontSize: '0.8rem' }}>
              <TrendingUp size={14} className="text-success" />
              <span>Resume Reported Impact:</span>
            </div>
            <div style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
              {project.reportedResults}
            </div>
          </div>
        )}

        {/* Technology Badges */}
        <div className="project-tech-tags">
          {project.technologies?.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="badge-tech">
              {tech}
            </span>
          ))}
          {project.technologies?.length > 5 && (
            <span className="badge-tech text-muted">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="project-footer-actions">
          <Link to={`/projects/${project.id}`} className="btn-primary-custom" style={{ padding: '0.55rem 1.15rem', fontSize: '0.88rem' }}>
            <span>Project Details</span>
            <ArrowRight size={15} />
          </Link>

          <div className="d-flex align-items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                style={{ width: '38px', height: '38px' }}
                aria-label={`View ${project.title} GitHub repository`}
                title="GitHub Repository"
              >
                <Github size={17} />
              </a>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                style={{ width: '38px', height: '38px' }}
                aria-label={`View live demo of ${project.title}`}
                title="Live Demonstration"
              >
                <ExternalLink size={17} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
