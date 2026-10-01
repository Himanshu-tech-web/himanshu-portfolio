import React, { useState, useEffect } from 'react';
import { navLinks, personalData } from '../data/portfolio';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--navbar-height)',
        backgroundColor: isScrolled ? 'rgba(255, 252, 249, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.02)' : 'none',
        transition: 'var(--transition-normal)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Himanshu Mehta - Home"
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            letterSpacing: '-0.02em',
          }}
        >
          {personalData.logoText.replace('.', '')}
          <span style={{ color: 'var(--accent-orange)' }}>.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'var(--transition-fast)',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      backgroundColor: 'var(--accent-orange)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-dark"
          >
            Let's Talk
            <ArrowRight size={15} style={{ color: 'var(--accent-orange)' }} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          style={{
            display: 'none',
            padding: '10px',
            color: 'var(--text-primary)',
            borderRadius: 'var(--radius-sm)',
            minWidth: '44px',
            minHeight: '44px',
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile Navigation"
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFCF9',
            borderBottom: '1px solid var(--border-light)',
            padding: '24px 28px 32px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxHeight: 'calc(100vh - var(--navbar-height))',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '18px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--accent-orange)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                }}
              >
                {link.name}
                {isActive && <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)' }} />}
              </a>
            );
          })}
          <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Let's Talk
              <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
};
