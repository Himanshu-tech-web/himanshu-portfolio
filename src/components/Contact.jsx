import React, { useState } from 'react';
import { contactData } from '../data/portfolio';
import { Mail, Phone, MapPin, ArrowRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Large Warm Light Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-tint)',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--accent-orange-border)',
            padding: '64px 52px',
            boxShadow: '0 12px 40px rgba(244, 123, 32, 0.06)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="contact-card"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '52px',
              alignItems: 'center',
            }}
            className="contact-grid"
          >
            {/* Left Content Column */}
            <div>
              <div className="section-badge-bar" />
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 46px)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '18px',
                  wordBreak: 'break-word',
                }}
              >
                Let's build something <br className="desktop-br" />
                meaningful <span style={{ color: 'var(--accent-orange)' }}>{contactData.highlightWord}</span>
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                  maxWidth: '520px',
                }}
              >
                {contactData.subtext}
              </p>

              {/* Contact Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Email</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <a
                        href={contactData.emailLink}
                        style={{ fontSize: '16px', fontWeight: 650, color: 'var(--text-primary)', wordBreak: 'break-all' }}
                      >
                        {contactData.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        title="Copy Email"
                        aria-label="Copy email address"
                        style={{
                          padding: '6px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#FFFFFF',
                          color: copiedEmail ? '#2ECC71' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Phone</span>
                    <span style={{ fontSize: '16px', fontWeight: 650, color: 'var(--text-primary)' }}>
                      {contactData.phone}
                    </span>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-orange)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                    <span style={{ fontSize: '16px', fontWeight: 650, color: 'var(--text-primary)' }}>
                      {contactData.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Social & Connect Column */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '36px 30px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Let's Connect
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Feel free to reach out for project inquiries, technical advice, or collaboration on web applications &amp; automation systems.
              </p>

              {/* Social Icons Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <a
                  href={contactData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-box"
                  title="GitHub Profile"
                  aria-label="Himanshu Mehta GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>

                <a
                  href={contactData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-box"
                  title="LinkedIn Profile"
                  aria-label="Himanshu Mehta LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>

                <a
                  href={contactData.emailLink}
                  className="social-box"
                  title="Email Direct"
                  aria-label="Email Himanshu Mehta"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Direct Mail Action Button (Opens Gmail Compose in New Tab) */}
              <a
                href={contactData.gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Send Message
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .social-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-main);
          border: 1.5px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .social-box:hover {
          border-color: var(--accent-orange);
          color: var(--accent-orange);
          background-color: var(--bg-tint);
          transform: translateY(-3px);
        }
        @media (max-width: 900px) {
          .contact-card {
            padding: 36px 20px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .desktop-br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
