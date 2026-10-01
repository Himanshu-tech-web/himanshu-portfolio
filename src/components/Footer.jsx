import React from 'react';
import { personalData, contactData } from '../data/portfolio';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid var(--border-light)',
        padding: '40px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Left Brand */}
          <a
            href="#home"
            aria-label="Himanshu Mehta - Return to Top"
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            {personalData.logoText.replace('.', '')}
            <span style={{ color: 'var(--accent-orange)' }}>.</span>
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a
              href={contactData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Himanshu Mehta GitHub Profile"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'var(--transition-fast)',
                padding: '6px 0',
              }}
              className="footer-link"
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <a
              href={contactData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Himanshu Mehta LinkedIn Profile"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'var(--transition-fast)',
                padding: '6px 0',
              }}
              className="footer-link"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>

            <a
              href={contactData.emailLink}
              aria-label="Email Himanshu Mehta"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'var(--transition-fast)',
                padding: '6px 0',
              }}
              className="footer-link"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px dashed var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          <p>© {new Date().getFullYear()} Himanshu Mehta. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with React &amp; Modern CSS
            <Heart size={13} fill="var(--accent-orange)" color="var(--accent-orange)" />
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-orange) !important;
        }
      `}</style>
    </footer>
  );
};
