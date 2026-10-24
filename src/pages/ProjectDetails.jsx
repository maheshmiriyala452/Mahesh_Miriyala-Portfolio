import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Cpu,
  Layers,
  GitBranch,
  Terminal
} from 'lucide-react';
import { Github } from '../components/Icons';
import Loader from '../components/Loader';
import projectService from '../services/projectService';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await projectService.getProjectById(id);
        if (!data) {
          setError('Project not found in repository database.');
        } else {
          setProject(data);
        }
      } catch (err) {
        console.error('Error fetching project detail:', err);
        setError('Failed to load project details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return <Loader message="Loading project details..." />;
  }

  if (error || !project) {
    return (
      <div className="section-padding text-center">
        <div className="container">
          <div className="glass-card p-5 mx-auto" style={{ maxWidth: '550px' }}>
            <AlertCircle size={48} className="text-danger mb-3" />
            <h3 className="fw-bold mb-2">Project Not Found</h3>
            <p className="text-muted mb-4">{error || 'The requested project could not be located.'}</p>
            <Link to="/projects" className="btn-primary-custom">
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const defaultImage =
    project.id === 'ai-resume-analyzer'
      ? '/images/project-ai-resume.svg'
      : project.id === 'ecommerce-analytics'
      ? '/images/project-ecommerce-sql.svg'
      : project.id === 'rythumitra-360'
      ? '/images/project-rythumitra-360.svg'
      : '/images/project-spa-react.svg';

  return (
    <div className="section-padding">
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="mb-4">
          <button
            onClick={() => navigate('/projects')}
            className="btn btn-link text-decoration-none p-0 d-inline-flex align-items-center gap-2 text-muted hover-link"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects Repository</span>
          </button>
        </div>

        {/* Project Hero Header */}
        <div className="glass-card p-4 p-md-5 mb-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-tech bg-primary-subtle text-primary border-primary">
                  {project.category}
                </span>
                {project.date && (
                  <span className="badge-tech">
                    {project.date}
                  </span>
                )}
                {project.featured && (
                  <span className="badge-tech bg-success-subtle text-success border-success">
                    Featured Implementation
                  </span>
                )}
              </div>

              <h1 className="fw-bold text-white mb-2" style={{ fontSize: '2.5rem' }}>
                {project.title}
              </h1>

              {project.tagline && (
                <h5 className="text-gradient fw-semibold mb-3">
                  {project.tagline}
                </h5>
              )}

              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                {project.summary}
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-custom"
                  >
                    <Github size={18} />
                    <span>View GitHub Repository</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-custom"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Architecture Preview */}
            <div className="col-lg-5">
              <div className="rounded-4 overflow-hidden border border-secondary shadow-lg">
                <img
                  src={project.image || defaultImage}
                  alt={project.title}
                  className="w-100 d-block"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="row gy-4 mb-5">
          {/* Problem Statement */}
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3 text-warning">
                <AlertCircle size={22} />
                <h4 className="fw-bold text-white mb-0">Problem Statement</h4>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                {project.problemStatement ||
                  'Organizations face inefficiencies and delayed visibility when relying on manual workflows for processing and evaluating candidate or transactional records.'}
              </p>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3 text-primary">
                <CheckCircle2 size={22} />
                <h4 className="fw-bold text-white mb-0">Project Objectives</h4>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {project.objectives?.map((obj, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2 text-secondary" style={{ fontSize: '0.95rem' }}>
                    <span className="text-primary fw-bold mt-1">&bull;</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Workflow Diagram / Process Illustration */}
        {project.workflow && project.workflow.length > 0 && (
          <div className="glass-card p-4 p-md-5 mb-5">
            <div className="d-flex align-items-center gap-2 mb-2 text-primary">
              <GitBranch size={22} />
              <h3 className="fw-bold text-white mb-0">Pipeline Architecture &amp; Workflow</h3>
            </div>
            <p className="text-muted mb-4">
              Step-by-step pipeline illustrating data extraction, transformation, analytical processing, and output delivery.
            </p>

            <div className="row g-3">
              {project.workflow.map((item, idx) => (
                <div key={idx} className="col-lg col-md-4 col-sm-6">
                  <div
                    className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)' }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="code-pill text-gradient-cyan fw-bold">Step {item.step}</span>
                      </div>
                      <h6 className="fw-bold text-white mb-2">{item.title}</h6>
                      <p className="text-muted mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Implementation Overview */}
        <div className="glass-card p-4 p-md-5 mb-5">
          <div className="d-flex align-items-center gap-2 mb-3 text-info">
            <Terminal size={22} />
            <h3 className="fw-bold text-white mb-0">Implementation Overview</h3>
          </div>
          <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            {project.implementationOverview}
          </p>

          <h5 className="fw-bold text-white mb-3">Key Features</h5>
          <div className="row g-2 mb-4">
            {project.keyFeatures?.map((feature, idx) => (
              <div key={idx} className="col-md-6">
                <div className="d-flex align-items-center gap-2 p-2 rounded-2" style={{ background: 'var(--bg-tertiary)' }}>
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span className="text-secondary" style={{ fontSize: '0.9rem' }}>{feature}</span>
                </div>
              </div>
            ))}
          </div>

          <h5 className="fw-bold text-white mb-3">Technologies Applied</h5>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies?.map((tech, idx) => (
              <span key={idx} className="badge-tech bg-primary-subtle text-primary border-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Reported Results from Resume */}
        <div className="glass-card p-4 p-md-5 mb-5 border-success">
          <div className="d-flex align-items-center gap-2 mb-3 text-success">
            <TrendingUp size={24} />
            <h3 className="fw-bold text-white mb-0">Results Reported in Resume</h3>
          </div>
          <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <p className="text-white mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              {project.reportedResults}
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.825rem' }}>
            <AlertCircle size={15} />
            <span>Note: Performance metrics and time savings are documented based on candidate resume records and internal benchmark testing.</span>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary-subtle">
          <Link to="/projects" className="btn-secondary-custom">
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>

          <Link to="/contact" className="btn-primary-custom">
            <span>Contact Mahesh Regarding This Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
