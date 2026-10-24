import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import contactService from '../services/contactService';
import AlertMessage from './AlertMessage';

export const ContactForm = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should contain at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await contactService.sendMessage(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully and logged to the JSON Server database.'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus({
        type: 'error',
        message:
          err.message ||
          'Unable to reach the mock JSON Server. Please check that "npm run server" is active on port 3001, or email directly at maheshmiriyala452@gmail.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const email = profile?.email || 'maheshmiriyala452@gmail.com';
  const phone = profile?.phone || '+91 9391620253';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/maheshmiriyala/';
  const github = profile?.github || 'https://github.com/maheshmiriyala';
  const location = profile?.location || 'Hyderabad, India';

  return (
    <section id="contact" className="section-padding" aria-label="Contact Section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={15} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Miriyala Mahesh</span>
          </h2>
          <p className="section-subtitle">
            Open for entry-level Full Stack Developer and Python Developer roles. Feel free to send a message or connect directly.
          </p>
        </div>

        <div className="row gy-4 align-items-stretch">
          {/* Contact Details Card */}
          <div className="col-lg-5">
            <div className="contact-info-card glass-card d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold text-white mb-3">Direct Contact Channels</h4>
                <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
                  I respond promptly to recruiter inquiries and technical hiring opportunities.
                </p>

                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Email</span>
                    <h6>
                      <a href={`mailto:${email}`} className="text-white text-decoration-none hover-link">
                        {email}
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Phone</span>
                    <h6>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white text-decoration-none hover-link">
                        {phone}
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Location</span>
                    <h6 className="text-white mb-0">{location}</h6>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-4 border-top border-secondary-subtle">
                <span className="text-muted d-block mb-3" style={{ fontSize: '0.85rem' }}>Professional Profiles</span>
                <div className="d-flex align-items-center gap-2">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-custom"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-custom"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h4 className="fw-bold text-white mb-2">Send a Direct Message</h4>
              <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                Submissions are stored via REST API (<code className="code-pill">POST /messages</code>) in the mock JSON Server backend.
              </p>

              {submitStatus && (
                <AlertMessage
                  type={submitStatus.type}
                  message={submitStatus.message}
                  onClose={() => setSubmitStatus(null)}
                />
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name field */}
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`form-control-custom w-100 ${errors.name ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && <div className="invalid-feedback-custom">{errors.name}</div>}
                  </div>

                  {/* Email field */}
                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className={`form-control-custom w-100 ${errors.email ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <div className="invalid-feedback-custom">{errors.email}</div>}
                  </div>

                  {/* Subject field */}
                  <div className="col-12">
                    <label htmlFor="contact-subject" className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Discussion regarding Full Stack Developer opening"
                      className={`form-control-custom w-100 ${errors.subject ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.subject && <div className="invalid-feedback-custom">{errors.subject}</div>}
                  </div>

                  {/* Message field */}
                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                      Message Content <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your inquiry or interview invitation details..."
                      className={`form-control-custom w-100 ${errors.message ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                      required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback-custom">{errors.message}</div>}
                  </div>

                  {/* Privacy / Architecture Notice */}
                  <div className="col-12">
                    <div className="p-3 rounded-3 d-flex align-items-start gap-2" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                      <ShieldAlert size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-muted">
                        <strong>Privacy Notice:</strong> This portfolio demonstration persists messages in the mock JSON Server database (<code className="code-pill">db.json</code>). In a live enterprise deployment, this endpoint connects to an authenticated Python Flask / Django service with encryption.
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-primary-custom w-100 justify-content-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          <span>Transmitting to REST API...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
