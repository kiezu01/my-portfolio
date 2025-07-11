import React, { useState } from "react";

const EMAIL = "vutrungkien082002@gmail.com";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section id="contact" className="contact-section fade-in" aria-label="Contact section" style={{ background: 'var(--card-bg)', color: 'var(--text)', boxShadow: '0 2px 10px #e6e8ff44', borderRadius: 14, padding: '18px 0', minHeight: 0 }}>
      <div className="contact-links" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        fontSize: '1.08rem',
        color: 'var(--text)',
        width: '100%',
        maxWidth: 700,
        margin: '0 auto',
        padding: 0,
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', textAlign: 'center', wordBreak: 'break-word', width: '100%' }}>
          <a href={`mailto:${EMAIL}`} title="Email" tabIndex={0} aria-label="Send email to Vu Trung Kien" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text)', wordBreak: 'break-word', textAlign: 'center', width: '100%', justifyContent: 'center', overflowWrap: 'anywhere' }}>
            <svg className="social-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
            {EMAIL}
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center', textAlign: 'center', wordBreak: 'break-word' }}>
          <a href="https://linkedin.com/in/kienvu68" target="_blank" rel="noopener noreferrer" title="LinkedIn" tabIndex={0} aria-label="LinkedIn profile" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text)', wordBreak: 'break-word', textAlign: 'center' }}>
            <svg className="social-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="12" y1="12" x2="12" y2="16"/></svg>
            linkedin.com/in/kienvu68
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center', textAlign: 'center', wordBreak: 'break-word' }}>
          <a href="https://github.com/kiezu01" target="_blank" rel="noopener noreferrer" title="GitHub" tabIndex={0} aria-label="GitHub profile" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text)', wordBreak: 'break-word', textAlign: 'center' }}>
            <svg className="social-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
            github.com/kiezu01
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center', textAlign: 'center', wordBreak: 'break-word' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text)', wordBreak: 'break-word', textAlign: 'center' }}>
            <span role="img" aria-label="Location">📍</span> Ho Chi Minh City, Vietnam
          </span>
        </div>
      </div>
    </section>
);
};

export default Contact;