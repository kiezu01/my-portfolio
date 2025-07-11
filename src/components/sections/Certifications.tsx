import React from "react";
import cvData from "../../data/cv-english.json";
import type { Certification } from "../../types/cv";

import sqlHackerrankThumb from "../../../assets/sql-hackerrank-thumb.png";
import googleDataAnalyticsThumb from "../../../assets/google-data-analytics-thumb.png";
import googleAiEssentialsThumb from "../../../assets/google-ai-essentials-thumb.png";
import udemyAdvancedExcelThumb from "../../../assets/udemy-advanced-excel-thumb.png";

const assetImages: Record<string, string> = {
  "sql-hackerrank-thumb.png": sqlHackerrankThumb,
  "google-data-analytics-thumb.png": googleDataAnalyticsThumb,
  "google-ai-essentials-thumb.png": googleAiEssentialsThumb,
  "udemy-advanced-excel-thumb.png": udemyAdvancedExcelThumb,
};

const BASE = "/my-portfolio"; // Đổi nếu repo khác

const CertificationsSection: React.FC = () => (
  <section id="certifications" className="container centered-section fade-in" aria-label="Certifications section" style={{ background: 'var(--card-bg)', color: 'var(--text)' }}>
    <h3>Certifications</h3>
    <div className="certifications-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28, width: '100%' }}>
      {cvData.certifications.map((cert: Certification, idx: number) => (
        <div
          key={idx}
          className="cert-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 210,
            maxWidth: 320,
            width: '100%',
            marginBottom: 18,
            boxSizing: 'border-box',
            padding: '0 8px'
          }}
        >
          <a
            href={`${BASE}/${cert.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: 'center', textDecoration: 'none', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            title="View certificate PDF"
          >
            {cert.image && assetImages[cert.image] && (
              <React.Fragment>
                <img
                  src={assetImages[cert.image]}
                  alt={cert.name}
                  className="cert-thumb"
                  style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
                  loading="lazy"
                  onLoad={e => e.currentTarget.classList.remove('skeleton')}
                  onError={e => e.currentTarget.classList.remove('skeleton')}
                />
                <style>{`.skeleton { background: #e6e8ff55; min-height: 120px; min-width: 180px; border-radius: 8px; animation: skeletonPulse 1.2s infinite alternate; } @keyframes skeletonPulse { to { background: #f5d14633; } }`}</style>
              </React.Fragment>
            )}
            <div className="cert-name">{cert.name}</div>
          </a>
          <span className="cert-issuer">{cert.issuer}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CertificationsSection; 