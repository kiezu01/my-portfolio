import React from "react";
import cvData from "../../data/cv-english.json";
import type { Experience } from "../../types/cv";

const ExperienceSection: React.FC = () => (
  <section id="experience" className="container centered-section fade-in" aria-label="Experience section" style={{ background: 'var(--card-bg)', color: 'var(--text)' }}>
    <h3 style={{ textAlign: 'center' }}>Experience</h3>
    <div className="timeline">
      {cvData.experience.map((exp: Experience, idx: number) => (
        <div key={idx} className="timeline-item fade-in">
          <div className="timeline-dot" aria-hidden="true" />
          {idx < cvData.experience.length - 1 && <div className="timeline-line" aria-hidden="true" />}
          <div className="timeline-content" style={{ color: 'var(--text)' }}>
            <h4>{exp.position} <span style={{ color: 'var(--accent)' }}>@ {exp.company}</span></h4>
            <div className="timeline-duration">{exp.duration}</div>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection; 