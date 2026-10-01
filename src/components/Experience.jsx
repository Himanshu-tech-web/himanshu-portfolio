import React from 'react';
import { experienceData } from '../data/portfolio';
import { GraduationCap, Code2, Award, Briefcase } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Code2,
  Award,
  Briefcase
};

export const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge-bar" />
          <h2 className="section-title">Experience &amp; Education</h2>
        </div>

        {/* Timeline Wrapper */}
        <div
          style={{
            position: 'relative',
            marginTop: '48px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              position: 'relative',
            }}
            className="experience-grid"
          >
            {/* Horizontal Dashed Connecting Line (Desktop) */}
            <div
              style={{
                position: 'absolute',
                top: '30px',
                left: '14%',
                right: '14%',
                height: '2px',
                borderTop: '2px dashed var(--border-light)',
                zIndex: 1,
              }}
              className="desktop-timeline-line"
            />

            {experienceData.map((item) => {
              const IconComp = iconMap[item.icon] || Briefcase;
              return (
                <div
                  key={item.id}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  className="timeline-item"
                >
                  {/* Step Icon Badge */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid var(--accent-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      marginBottom: '20px',
                      boxShadow: '0 4px 16px rgba(244, 123, 32, 0.18)',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={26} strokeWidth={1.8} />
                  </div>

                  {/* Period Badge */}
                  <span
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--accent-orange)',
                      backgroundColor: 'var(--bg-tint)',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--accent-orange-border)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.period}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.role}
                  </h3>

                  {/* Institution / Highlight */}
                  <span
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                    }}
                  >
                    {item.institution}
                  </span>

                  {/* Description Card */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1.5px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '24px',
                      boxShadow: 'var(--shadow-subtle)',
                      width: '100%',
                      transition: 'var(--transition-fast)',
                    }}
                    className="timeline-card"
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-card:hover {
          border-color: var(--accent-orange);
          transform: translateY(-4px);
        }
        @media (max-width: 960px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .desktop-timeline-line {
            display: none !important;
          }
          .timeline-item {
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};
