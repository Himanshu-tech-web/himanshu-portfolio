import React from 'react';
import { processSteps } from '../data/portfolio';
import { Search, PenTool, Code2, Zap, TrendingUp } from 'lucide-react';

const iconMap = {
  Search,
  PenTool,
  Code2,
  Zap,
  TrendingUp
};

export const Process = () => {
  return (
    <section id="process" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge-bar" />
          <h2 className="section-title">My Process</h2>
        </div>

        {/* Process Steps Grid */}
        <div
          style={{
            position: 'relative',
            marginTop: '44px',
          }}
        >
          {/* Connecting Line (Desktop) */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '8%',
              right: '8%',
              height: '2px',
              borderTop: '2px dashed var(--border-light)',
              zIndex: 1,
            }}
            className="process-connecting-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              position: 'relative',
              zIndex: 2,
            }}
            className="process-grid"
          >
            {processSteps.map((stepItem) => {
              const IconComp = iconMap[stepItem.icon] || Code2;
              return (
                <div
                  key={stepItem.step}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  className="process-step-item"
                >
                  {/* Step Icon Container */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-tint)',
                      border: '2px solid var(--accent-orange-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      marginBottom: '18px',
                      transition: 'var(--transition-fast)',
                      boxShadow: '0 4px 14px rgba(244, 123, 32, 0.12)',
                      flexShrink: 0,
                    }}
                    className="process-icon-box"
                  >
                    <IconComp size={26} strokeWidth={1.8} />
                  </div>

                  {/* Step Number */}
                  <span
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: 'var(--accent-orange)',
                      marginBottom: '4px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stepItem.step}
                  </span>

                  {/* Step Title */}
                  <h3
                    style={{
                      fontSize: '17.5px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '6px',
                    }}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      maxWidth: '220px',
                    }}
                  >
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-step-item:hover .process-icon-box {
          background-color: var(--accent-orange);
          color: #FFFFFF;
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(244, 123, 32, 0.3);
        }
        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 36px !important;
          }
          .process-connecting-line {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
