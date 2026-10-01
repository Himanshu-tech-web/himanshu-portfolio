import React from 'react';
import { skillsData } from '../data/portfolio';
import {
  FileCode,
  Atom,
  Server,
  Cpu,
  Layers,
  Database,
  Globe,
  Zap,
  Box,
  GitBranch,
  Bot,
  Code2
} from 'lucide-react';

const iconMap = {
  FileCode,
  Atom,
  Server,
  Cpu,
  Layers,
  Database,
  Globe,
  Zap,
  Box,
  GitBranch,
  Bot
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge-bar" />
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '20px',
          }}
          className="skills-grid"
        >
          {skillsData.map((skill) => {
            const IconComp = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="skill-card"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  transition: 'var(--transition-normal)',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-tint)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)',
                    transition: 'var(--transition-fast)',
                  }}
                  className="skill-icon-wrapper"
                >
                  <IconComp size={26} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 650,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                      lineHeight: 1.25,
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-orange);
          box-shadow: var(--shadow-hover);
        }
        .skill-card:hover .skill-icon-wrapper {
          background-color: var(--accent-orange);
          color: #FFFFFF;
        }
        @media (max-width: 540px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          .skill-card {
            padding: 20px 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
