import React from 'react';
import { personalData } from '../data/portfolio';
import heroIllustration from '../assets/hero-illustration-v3.png';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const nameParts = personalData.name.split(' ');
  const firstName = nameParts[0] || 'Himanshu';
  const lastName = nameParts.slice(1).join(' ') || 'Mehta';

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 40px)',
        paddingBottom: '80px',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column Content */}
          <div className="hero-content" style={{ zIndex: 2 }}>
            {/* Small tag */}
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '3.5px', backgroundColor: 'var(--accent-orange)', borderRadius: '2px' }} />
              <span
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.01em',
                }}
              >
                {personalData.heroTag}
              </span>
            </div>

            {/* Main Heading: Himanshu Mehta (Sole H1 on Page) */}
            <h1
              style={{
                fontSize: 'clamp(34px, 5.8vw, 76px)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '18px',
                wordBreak: 'break-word',
              }}
            >
              {firstName} <span style={{ color: 'var(--accent-orange)' }}>{lastName}</span>
            </h1>

            {/* Subtitle */}
            <h2
              style={{
                fontSize: 'clamp(19px, 2.2vw, 26px)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                lineHeight: 1.3,
              }}
            >
              {personalData.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(15px, 1.25vw, 17px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '36px',
              }}
            >
              {personalData.heroDescription}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <a href="#work" onClick={handleScrollToWork} className="btn-primary">
                View My Work
                <ArrowRight size={18} />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Himanshu-Mehta-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* Right Column Illustration */}
          <div className="hero-illustration" style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <img
              src={heroIllustration}
              alt="Full-stack developer working at a computer"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 12px 28px rgba(0, 0, 0, 0.04))' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: left;
          }
          .hero-illustration {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};
