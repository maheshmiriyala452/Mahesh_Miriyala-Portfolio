import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationCard from '../components/EducationCard';
import CertificationCard from '../components/CertificationCard';
import AchievementCard from '../components/AchievementCard';
import ResumeSection from '../components/ResumeSection';
import ContactForm from '../components/ContactForm';
import Loader from '../components/Loader';
import AlertMessage from '../components/AlertMessage';
import { ArrowRight, Sparkles, FolderGit2 } from 'lucide-react';

import profileService from '../services/profileService';
import projectService from '../services/projectService';
import skillService from '../services/skillService';
import experienceService from '../services/experienceService';
import educationService from '../services/educationService';
import certificationService from '../services/certificationService';
import achievementService from '../services/achievementService';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [apiNotice, setApiNotice] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [
          profileData,
          skillsData,
          projectsData,
          expData,
          eduData,
          certsData,
          achieveData
        ] = await Promise.all([
          profileService.getProfile(),
          skillService.getSkills(),
          projectService.getProjects(),
          experienceService.getExperience(),
          educationService.getEducation(),
          certificationService.getCertifications(),
          achievementService.getAchievements()
        ]);

        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
        setExperience(expData);
        setEducation(eduData);
        setCertifications(certsData);
        setAchievements(achieveData);
      } catch (err) {
        console.error('Data fetch error on Home:', err);
        setApiNotice('Connecting to JSON Server REST endpoints. Seed dataset active.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <Loader message="Loading Mahesh Miriyala's portfolio..." />;
  }

  return (
    <div>
      {apiNotice && (
        <div className="container pt-3">
          <AlertMessage
            type="info"
            message={apiNotice}
            onClose={() => setApiNotice(null)}
          />
        </div>
      )}

      {/* 1. Hero Section */}
      <Hero profile={profile} />

      {/* 2. About Me */}
      <About profile={profile} />

      {/* 3. Technical Skills */}
      <Skills skills={skills} />

      {/* 4. Projects Showcase */}
      <section id="projects" className="section-padding" aria-label="Featured Projects">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <FolderGit2 size={15} />
              <span>Technical Implementations</span>
            </div>
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              Production-oriented applications showcasing AI/NLP pipelines, 3NF normalized SQL database analytics, and single-page React/Flask architectures.
            </p>
          </div>

          <div className="row g-4">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="col-lg-4 col-md-6">
                <ProjectCard project={proj} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/projects" className="btn-secondary-custom">
              <span>Explore All Projects &amp; SQL Query Repositories</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Professional Experience */}
      <ExperienceTimeline experience={experience} />

      {/* 6. Education */}
      <EducationCard education={education} />

      {/* 7. Certifications */}
      <CertificationCard certifications={certifications} />

      {/* 8. Achievements & Leadership */}
      <AchievementCard achievements={achievements} />

      {/* 9. Resume Section */}
      <ResumeSection profile={profile} />

      {/* 10. Contact Section */}
      <ContactForm profile={profile} />
    </div>
  );
};

export default Home;
