import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  FolderGit2,
  Cpu,
  Mail,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  Eye,
  RefreshCw,
  Info
} from 'lucide-react';
import Loader from '../components/Loader';
import AlertMessage from '../components/AlertMessage';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';

import projectService from '../services/projectService';
import skillService from '../services/skillService';
import contactService from '../services/contactService';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects', 'skills', 'messages'
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState(null);

  // Data states
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);

  // Project Modal State (Create / Edit)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectForm, setProjectForm] = useState({
    id: '',
    title: '',
    tagline: '',
    category: 'Full Stack',
    technologies: '',
    summary: '',
    problemStatement: '',
    reportedResults: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: false
  });
  const [isEditingProject, setIsEditingProject] = useState(false);

  // Skill Modal State (Add)
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [skillForm, setSkillForm] = useState({
    name: '',
    category: 'Programming Languages',
    badge: 'Core',
    description: ''
  });

  // Delete Confirm State
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    actionType: null, // 'project' | 'skill' | 'message'
    targetId: null
  });

  const loadAllAdminData = async () => {
    try {
      setLoading(true);
      const [projData, skillsData, msgData] = await Promise.all([
        projectService.getProjects(),
        skillService.getSkills(),
        contactService.getMessages()
      ]);
      setProjects(projData);
      setSkills(skillsData);
      setMessages(msgData);
    } catch (err) {
      console.error('Admin data load error:', err);
      setFeedback({
        type: 'warning',
        message: 'Could not connect directly to mock JSON Server. Ensure "npm run server" is running on port 3001.'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllAdminData();
  }, []);

  // --- PROJECT CRUD HANDLERS ---
  const handleOpenAddProject = () => {
    setProjectForm({
      id: `project-${Date.now()}`,
      title: '',
      tagline: '',
      category: 'Full Stack',
      technologies: '',
      summary: '',
      problemStatement: '',
      reportedResults: '',
      githubUrl: '',
      liveDemoUrl: '',
      featured: true
    });
    setIsEditingProject(false);
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (p) => {
    setProjectForm({
      id: p.id,
      title: p.title || '',
      tagline: p.tagline || '',
      category: p.category || 'Full Stack',
      technologies: Array.isArray(p.technologies) ? p.technologies.join(', ') : '',
      summary: p.summary || '',
      problemStatement: p.problemStatement || '',
      reportedResults: p.reportedResults || '',
      githubUrl: p.githubUrl || '',
      liveDemoUrl: p.liveDemoUrl || '',
      featured: !!p.featured
    });
    setIsEditingProject(true);
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    const payload = {
      ...projectForm,
      technologies: projectForm.technologies
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    };

    try {
      if (isEditingProject) {
        await projectService.updateProject(projectForm.id, payload);
        setFeedback({ type: 'success', message: `Project "${payload.title}" updated successfully.` });
      } else {
        await projectService.createProject(payload);
        setFeedback({ type: 'success', message: `Project "${payload.title}" created successfully.` });
      }
      setIsProjectModalOpen(false);
      loadAllAdminData();
    } catch (err) {
      console.error('Project save error:', err);
      setFeedback({
        type: 'danger',
        message: `API Error: ${err.message || 'Failed to save project. Ensure json-server is active.'}`
      });
    }
  };

  // --- SKILL CRUD HANDLERS ---
  const handleSaveSkill = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...skillForm,
        id: `skill-${Date.now()}`
      };
      await skillService.createSkill(payload);
      setFeedback({ type: 'success', message: `Skill "${payload.name}" added successfully.` });
      setIsSkillModalOpen(false);
      setSkillForm({ name: '', category: 'Programming Languages', badge: 'Core', description: '' });
      loadAllAdminData();
    } catch (err) {
      setFeedback({ type: 'danger', message: `Failed to create skill: ${err.message}` });
    }
  };

  // --- DELETE CONFIRMATION HANDLER ---
  const handleConfirmDelete = async () => {
    const { actionType, targetId } = confirmDialog;
    try {
      if (actionType === 'project') {
        await projectService.deleteProject(targetId);
        setFeedback({ type: 'success', message: 'Project record deleted successfully.' });
      } else if (actionType === 'skill') {
        await skillService.deleteSkill(targetId);
        setFeedback({ type: 'success', message: 'Skill record deleted successfully.' });
      } else if (actionType === 'message') {
        await contactService.deleteMessage(targetId);
        setFeedback({ type: 'success', message: 'Message record removed successfully.' });
      }
      loadAllAdminData();
    } catch (err) {
      setFeedback({ type: 'danger', message: `Delete failed: ${err.message}` });
    } finally {
      setConfirmDialog({ isOpen: false, title: '', message: '', actionType: null, targetId: null });
    }
  };

  const handleMarkMessageRead = async (id) => {
    try {
      await contactService.markAsRead(id);
      loadAllAdminData();
    } catch (err) {
      console.error('Failed to mark read:', err);
    }
  };

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  if (loading) return <Loader message="Loading admin management console..." />;

  return (
    <div className="section-padding">
      <div className="container">
        {/* Security / Architecture Disclaimer */}
        <div className="p-3 mb-4 rounded-3 d-flex align-items-start gap-3" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <ShieldAlert size={24} className="text-warning flex-shrink-0 mt-1" />
          <div style={{ fontSize: '0.88rem' }}>
            <strong className="text-warning d-block mb-1">Demonstration Management Dashboard</strong>
            <span className="text-secondary">
              This administrative dashboard is built to demonstrate practical client-side REST CRUD operations (Create, Read, Update, Delete) against the mock JSON Server backend. 
              <strong> Note on Production Architecture:</strong> JSON Server is a mock backend suitable for local demonstration. Real enterprise systems require server-side authentication (e.g. JWT / OAuth2 in Python Flask or Django) with secure database access control.
            </span>
          </div>
        </div>

        {/* Dashboard Title & Actions */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <h1 className="fw-bold text-white mb-1">Portfolio Administration Console</h1>
            <p className="text-muted mb-0">Manage projects, technical skills, and review recruiter inquiries.</p>
          </div>
          <button onClick={loadAllAdminData} className="btn-secondary-custom" title="Refresh API data">
            <RefreshCw size={16} />
            <span>Refresh State</span>
          </button>
        </div>

        {feedback && (
          <AlertMessage
            type={feedback.type}
            message={feedback.message}
            onClose={() => setFeedback(null)}
          />
        )}

        {/* Statistics Cards */}
        <div className="row g-3 mb-4">
          <div className="col-lg-4 col-md-6">
            <div className="stat-card">
              <div>
                <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.78rem' }}>Total Projects</div>
                <div className="display-6 fw-bold text-white my-1">{projects.length}</div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Active in portfolio gallery</div>
              </div>
              <div className="stat-icon" style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)' }}>
                <FolderGit2 size={26} />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="stat-card">
              <div>
                <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.78rem' }}>Technical Skills</div>
                <div className="display-6 fw-bold text-white my-1">{skills.length}</div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Verified competencies</div>
              </div>
              <div className="stat-icon" style={{ background: 'var(--accent-violet-light)', color: 'var(--accent-violet)' }}>
                <Cpu size={26} />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="stat-card">
              <div>
                <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.78rem' }}>Recruiter Inquiries</div>
                <div className="display-6 fw-bold text-white my-1">{messages.length}</div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                  <span className="text-warning fw-bold">{unreadCount} unread</span> in database
                </div>
              </div>
              <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                <Mail size={26} />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="d-flex flex-wrap gap-2 mb-4 border-bottom border-secondary-subtle pb-3">
          <button
            className={`filter-pill ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects Management ({projects.length})
          </button>
          <button
            className={`filter-pill ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills Records ({skills.length})
          </button>
          <button
            className={`filter-pill ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Contact Messages ({messages.length})
          </button>
        </div>

        {/* --- TAB 1: PROJECTS TABLE --- */}
        {activeTab === 'projects' && (
          <div className="glass-card p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="fw-bold text-white mb-0">Project Records</h4>
              <button className="btn-primary-custom" onClick={handleOpenAddProject}>
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                <thead>
                  <tr className="border-secondary">
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Technologies</th>
                    <th scope="col">Featured</th>
                    <th scope="col" className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.id} className="border-secondary">
                      <td>
                        <strong className="text-white">{p.title}</strong>
                        {p.tagline && <div className="text-muted" style={{ fontSize: '0.8rem' }}>{p.tagline}</div>}
                      </td>
                      <td>
                        <span className="badge-tech">{p.category}</span>
                      </td>
                      <td>
                        <div className="d-flex flex-wrap gap-1" style={{ maxWidth: '280px' }}>
                          {p.technologies?.slice(0, 3).map((t, i) => (
                            <span key={i} className="code-pill" style={{ fontSize: '0.72rem' }}>{t}</span>
                          ))}
                          {p.technologies?.length > 3 && (
                            <span className="text-muted" style={{ fontSize: '0.72rem' }}>+{p.technologies.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td>
                        {p.featured ? (
                          <span className="badge bg-success-subtle text-success">Yes</span>
                        ) : (
                          <span className="badge bg-secondary">No</span>
                        )}
                      </td>
                      <td className="text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleOpenEditProject(p)}
                            title="Edit Project"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              setConfirmDialog({
                                isOpen: true,
                                title: 'Delete Project',
                                message: `Are you sure you want to delete "${p.title}"? This will send a DELETE request to JSON Server.`,
                                actionType: 'project',
                                targetId: p.id
                              })
                            }
                            title="Delete Project"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {projects.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-muted">
                        No projects in database. Click "Add New Project" to create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB 2: SKILLS TABLE --- */}
        {activeTab === 'skills' && (
          <div className="glass-card p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="fw-bold text-white mb-0">Skill Records</h4>
              <button className="btn-primary-custom" onClick={() => setIsSkillModalOpen(true)}>
                <Plus size={16} />
                <span>Add New Skill</span>
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                <thead>
                  <tr className="border-secondary">
                    <th scope="col">Skill Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Badge</th>
                    <th scope="col">Description</th>
                    <th scope="col" className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((s) => (
                    <tr key={s.id} className="border-secondary">
                      <td><strong className="text-white">{s.name}</strong></td>
                      <td><span className="badge-tech">{s.category}</span></td>
                      <td><span className="code-pill">{s.badge}</span></td>
                      <td style={{ fontSize: '0.85rem', maxWidth: '350px' }} className="text-muted">
                        {s.description}
                      </td>
                      <td className="text-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            setConfirmDialog({
                              isOpen: true,
                              title: 'Delete Skill',
                              message: `Are you sure you want to delete "${s.name}"?`,
                              actionType: 'skill',
                              targetId: s.id
                            })
                          }
                          title="Delete Skill"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB 3: CONTACT MESSAGES --- */}
        {activeTab === 'messages' && (
          <div className="glass-card p-4">
            <h4 className="fw-bold text-white mb-3">Submitted Inquiries ({messages.length})</h4>

            {messages.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className="p-3 rounded-3"
                    style={{
                      background: m.status === 'unread' ? 'rgba(59, 130, 246, 0.08)' : 'var(--bg-tertiary)',
                      border: m.status === 'unread' ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div>
                        <strong className="text-white me-2">{m.name}</strong>
                        <a href={`mailto:${m.email}`} className="text-primary hover-link" style={{ fontSize: '0.88rem' }}>
                          &lt;{m.email}&gt;
                        </a>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        {m.status === 'unread' ? (
                          <span className="badge bg-primary">Unread</span>
                        ) : (
                          <span className="badge bg-secondary">Read</span>
                        )}
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                          {m.date ? new Date(m.date).toLocaleString() : ''}
                        </span>
                      </div>
                    </div>

                    <h6 className="fw-bold text-white mb-2">{m.subject}</h6>
                    <p className="text-secondary mb-3" style={{ fontSize: '0.92rem', whiteSpace: 'pre-line' }}>
                      {m.message}
                    </p>

                    <div className="d-flex justify-content-end gap-2">
                      {m.status === 'unread' && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-success d-inline-flex align-items-center gap-1"
                          onClick={() => handleMarkMessageRead(m.id)}
                        >
                          <CheckCircle size={14} />
                          <span>Mark as Read</span>
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
                        onClick={() =>
                          setConfirmDialog({
                            isOpen: true,
                            title: 'Delete Message',
                            message: `Are you sure you want to remove message from ${m.name}?`,
                            actionType: 'message',
                            targetId: m.id
                          })
                        }
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Mail}
                title="No messages received"
                description="Submitted messages from the contact form will appear here."
              />
            )}
          </div>
        )}

        {/* --- MODAL: CREATE / EDIT PROJECT --- */}
        <Modal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
          title={isEditingProject ? 'Edit Project' : 'Create New Project'}
        >
          <form onSubmit={handleSaveProject}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Project Title *</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Tagline</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  value={projectForm.tagline}
                  onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Category *</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  required
                  value={projectForm.category}
                  onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Technologies (comma separated) *</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  placeholder="Python, Flask, React.js, MySQL"
                  required
                  value={projectForm.technologies}
                  onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Summary *</label>
                <textarea
                  className="form-control-custom w-100"
                  rows={3}
                  required
                  value={projectForm.summary}
                  onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })}
                ></textarea>
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Reported Results (Resume)</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  value={projectForm.reportedResults}
                  onChange={(e) => setProjectForm({ ...projectForm, reportedResults: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>GitHub URL</label>
                <input
                  type="url"
                  className="form-control-custom w-100"
                  value={projectForm.githubUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Live Demo URL (optional)</label>
                <input
                  type="url"
                  className="form-control-custom w-100"
                  value={projectForm.liveDemoUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, liveDemoUrl: e.target.value })}
                />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="featuredCheck"
                    checked={projectForm.featured}
                    onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                  />
                  <label className="form-check-label text-secondary" htmlFor="featuredCheck">
                    Feature on Homepage
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary-subtle">
              <button type="button" className="btn-secondary-custom" onClick={() => setIsProjectModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="btn-primary-custom">
                {isEditingProject ? 'Save Changes' : 'Create Project'}
              </button>
            </div>
          </form>
        </Modal>

        {/* --- MODAL: ADD SKILL --- */}
        <Modal
          isOpen={isSkillModalOpen}
          onClose={() => setIsSkillModalOpen(false)}
          title="Add Technical Skill"
          maxWidth="500px"
        >
          <form onSubmit={handleSaveSkill}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Skill Name *</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  required
                  placeholder="e.g. FastAPI, TailwindCSS"
                  value={skillForm.name}
                  onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Category *</label>
                <select
                  className="form-control-custom w-100"
                  value={skillForm.category}
                  onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                >
                  <option value="Programming Languages">Programming Languages</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Tools & Platforms">Tools &amp; Platforms</option>
                  <option value="Core Competencies">Core Competencies</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Badge Label</label>
                <input
                  type="text"
                  className="form-control-custom w-100"
                  placeholder="e.g. Framework, API"
                  value={skillForm.badge}
                  onChange={(e) => setSkillForm({ ...skillForm, badge: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>Description</label>
                <textarea
                  className="form-control-custom w-100"
                  rows={3}
                  placeholder="Practical competency application..."
                  value={skillForm.description}
                  onChange={(e) => setSkillForm({ ...skillForm, description: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary-subtle">
              <button type="button" className="btn-secondary-custom" onClick={() => setIsSkillModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="btn-primary-custom">
                Add Skill
              </button>
            </div>
          </form>
        </Modal>

        {/* --- CONFIRM DELETE DIALOG --- */}
        <ConfirmDialog
          isOpen={confirmDialog.isOpen}
          title={confirmDialog.title}
          message={confirmDialog.message}
          onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
