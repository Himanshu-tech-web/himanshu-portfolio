import React from 'react';
import { personalData } from '../data/portfolio';
import aboutIllustration from '../assets/about-illustration-v3.png';
import { Lightbulb, Code, Workflow, BookOpen, Compass, Sparkles } from 'lucide-react';

const iconMap = {
  Lightbulb,
  Code,
  Workflow,
  BookOpen,
  Compass,
  Sparkles,
};

export const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Illustration */}
          <div className="about-illustration-container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <img
              src={aboutIllustration}
              alt="Developer illustration"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.03))' }}
            />
          </div>

          {/* Right Column: Content */}
          <div className="about-content">
            <div className="section-header" style={{ marginBottom: '24px' }}>
              <div className="section-badge-bar" />
              <h2 className="section-title">{personalData.aboutHeading}</h2>
            </div>

            <p
              style={{
                fontSize: 'clamp(15px, 1.15vw, 16.5px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '40px',
              }}
            >
              {personalData.aboutDescription}
            </p>

            {/* 6 Feature Items Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '24px 20px',
              }}
            >
              {personalData.aboutHighlights.map((item) => {
                const IconComponent = iconMap[item.icon] || Code;
                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                    }}
                  >
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-tint)',
                        color: 'var(--accent-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '15px',
                          fontWeight: 650,
                          color: 'var(--text-primary)',
                          marginBottom: '3px',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
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
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
