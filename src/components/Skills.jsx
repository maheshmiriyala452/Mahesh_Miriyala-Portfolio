import React, { useState, useMemo } from 'react';
import { Cpu, Search, CheckCircle } from 'lucide-react';

export const Skills = ({ skills = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = ['All'];
    skills.forEach((s) => {
      if (s.category && !cats.includes(s.category)) {
        cats.push(s.category);
      }
    });
    return cats;
  }, [skills]);

  const filteredSkills = useMemo(() => {
    return skills.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="section-padding" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={15} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Core stack competencies spanning Python backend development, responsive React.js web interfaces, normalized relational databases, and modern developer tooling.
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-4">
              {/* Category Pills */}
              <div className="skills-filter-nav mb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="position-relative" style={{ minWidth: '240px' }}>
                <input
                  type="text"
                  className="form-control-custom w-100 ps-5"
                  placeholder="Filter skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Filter skills"
                />
                <Search
                  size={16}
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row g-3">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card glass-card">
                <div>
                  <div className="skill-card-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category-badge">{skill.badge || skill.category}</span>
                  </div>
                  <p className="skill-desc">
                    {skill.description || 'Verified resume competency applied across projects and development.'}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.78rem' }}>
                  <CheckCircle size={13} className="text-success" />
                  <span>Resume Verified</span>
                </div>
              </div>
            </div>
          ))}

          {filteredSkills.length === 0 && (
            <div className="col-12 text-center py-4 text-muted">
              No skills found matching "{searchQuery}" in category "{selectedCategory}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
