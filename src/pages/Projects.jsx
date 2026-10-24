import React, { useState, useEffect, useMemo } from 'react';
import { Search, FolderGit2, ArrowUpDown, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import Pagination from '../components/Pagination';
import projectService from '../services/projectService';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'title', 'date'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Compute available technologies for filter pills
  const availableTech = useMemo(() => {
    const techSet = new Set(['All']);
    projects.forEach((p) => {
      p.technologies?.forEach((t) => techSet.add(t));
    });
    return Array.from(techSet).slice(0, 10); // top 10 tags
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter((p) => {
        const matchesTech =
          selectedTech === 'All' || p.technologies?.includes(selectedTech);
        const matchesQuery =
          p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.technologies?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTech && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'date') {
          return (b.date || '').localeCompare(a.date || '');
        }
        // Default: featured first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [projects, selectedTech, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredAndSortedProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProjects.slice(start, start + itemsPerPage);
  }, [filteredAndSortedProjects, currentPage]);

  if (loading) {
    return <Loader message="Loading portfolio projects..." />;
  }

  return (
    <div className="section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Project Repository</span>
          </div>
          <h1 className="section-title">
            Projects &amp; <span className="text-gradient">Case Studies</span>
          </h1>
          <p className="section-subtitle">
            Explore verified applications, AI resume matching pipelines, and MySQL relational database analytics engineered by Miriyala Mahesh.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card p-3 p-md-4 mb-4">
          <div className="row g-3 align-items-center">
            {/* Search Input */}
            <div className="col-lg-5 col-md-6">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control-custom w-100 ps-5"
                  placeholder="Search by title, technology, or keywords..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  aria-label="Search projects"
                />
                <Search
                  size={18}
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                />
              </div>
            </div>

            {/* Sort Selector */}
            <div className="col-lg-3 col-md-6 ms-auto">
              <div className="d-flex align-items-center gap-2">
                <ArrowUpDown size={16} className="text-muted flex-shrink-0" />
                <select
                  className="form-control-custom w-100"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort projects"
                >
                  <option value="featured">Featured First</option>
                  <option value="title">Alphabetical (A-Z)</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-3 mt-3 border-top border-secondary-subtle d-flex flex-wrap align-items-center gap-2">
            <span className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.85rem' }}>
              <Filter size={14} />
              <span>Technology Filter:</span>
            </span>
            {availableTech.map((tech) => (
              <button
                key={tech}
                type="button"
                className={`filter-pill ${selectedTech === tech ? 'active' : ''}`}
                style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}
                onClick={() => {
                  setSelectedTech(tech);
                  setCurrentPage(1);
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {paginatedProjects.length > 0 ? (
          <>
            <div className="row g-4">
              {paginatedProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        ) : (
          <EmptyState
            title="No matching projects"
            description={`No projects found matching "${searchQuery}". Try selecting another technology or clearing your search.`}
            actionLabel="Reset Filters"
            onAction={() => {
              setSearchQuery('');
              setSelectedTech('All');
              setCurrentPage(1);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
