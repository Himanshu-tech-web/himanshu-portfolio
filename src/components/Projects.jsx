import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.featured);

  return (
    <section id="work" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header with View All Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div className="section-badge-bar" />
            <h2 className="section-title">Selected Work</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setFilter(filter === 'all' ? 'featured' : 'all')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent-orange)',
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--bg-tint)',
                border: '1px solid var(--accent-orange-border)',
                transition: 'var(--transition-fast)',
              }}
            >
              {filter === 'all' ? 'Show Featured Only' : 'View All Projects'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Responsive 3 -> 2 -> 1 Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1.5px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              {/* Top Visual Container */}
              <div
                style={{
                  height: '220px',
                  backgroundColor: 'var(--bg-tint)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="project-visual-wrapper"
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="project-visual-inner"
                >
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Tag Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  {project.featured && <Sparkles size={13} fill="var(--accent-orange)" color="var(--accent-orange)" />}
                  {project.tag}
                </div>
              </div>

              {/* Card Content Area */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Title & External Link Icon */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px', gap: '12px' }}>
                    <div>
                      <h3
                        style={{
                          fontSize: '19px',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          lineHeight: 1.25,
                        }}
                      >
                        {project.title}
                      </h3>
                      <span
                        style={{
                          fontSize: '13px',
                          color: 'var(--accent-orange)',
                          fontWeight: 500,
                          display: 'block',
                          marginTop: '3px',
                        }}
                      >
                        {project.subTitle}
                      </span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${project.title} Live Demo`}
                      aria-label={`${project.title} Live Demo`}
                      style={{
                        padding: '9px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-tint-light)',
                        color: 'var(--text-primary)',
                        transition: 'var(--transition-fast)',
                        border: '1px solid var(--border-light)',
                        flexShrink: 0,
                      }}
                      className="project-external-btn"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies Tags & Actions */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px',
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-tint)',
                          padding: '5px 11px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-card)' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Source Code`}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 650,
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'var(--transition-fast)',
                      }}
                      className="project-link"
                    >
                      <GithubIcon size={16} />
                      Source Code
                    </a>

                    <span style={{ color: 'var(--border-light)' }}>•</span>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 650,
                        color: 'var(--accent-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'var(--transition-fast)',
                      }}
                      className="project-link"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-orange-border);
          box-shadow: var(--shadow-hover);
        }
        .project-card:hover .project-visual-inner {
          transform: scale(1.03);
        }
        .project-external-btn:hover {
          background-color: var(--accent-orange) !important;
          color: #FFFFFF !important;
          border-color: var(--accent-orange) !important;
        }
        .project-link:hover {
          opacity: 0.8;
        }
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .project-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
