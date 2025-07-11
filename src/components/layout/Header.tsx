import React, { useEffect } from "react";

const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
};

const sectionIds = [
  "about",
  "skills",
  "experience",
  "certifications",
  "projects",
  "contact"
];

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (id === "contact") {
            if (rect.top <= 80 && rect.bottom >= 80) {
              current = id;
              break;
            }
          } else {
            if (rect.top <= 80 && rect.bottom > 80) {
              current = id;
              break;
            }
          }
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = "contact";
      }
      document.querySelectorAll(".nav-menu a").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
          a.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="main-nav" aria-label="Main navigation" role="navigation">
    <div className="nav-container">
        <span className="nav-logo" tabIndex={0} aria-label="Homepage, Kien Vu">Kien Vu</span>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Open navigation menu" tabIndex={0} role="button">&#9776;</label>
      <ul className="nav-menu">
          <li><a href="#about" tabIndex={0} aria-label="About section">About</a></li>
          <li><a href="#skills" tabIndex={0} aria-label="Skills section">Skills</a></li>
          <li><a href="#experience" tabIndex={0} aria-label="Experience section">Experience</a></li>
          <li><a href="#certifications" tabIndex={0} aria-label="Certifications section">Certifications</a></li>
          <li><a href="#projects" tabIndex={0} aria-label="Projects section">Projects</a></li>
          <li><a href="#contact" tabIndex={0} aria-label="Contact section">Contact</a></li>
        <li>
          <a
            className="download-cv-btn"
              href="/my-portfolio/CV_VuTrungKien.pdf"
            download
              tabIndex={0}
              aria-label="Download CV as PDF"
          >
            Download CV
          </a>
        </li>
          <li>
            <button
              onClick={toggleDarkMode}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.3rem",
                cursor: "pointer",
                marginLeft: 8,
                color: "var(--text)",
                transition: "color 0.18s"
              }}
              aria-label="Toggle dark mode"
              title="Toggle dark/light mode"
              tabIndex={0}
            >
              🌙 / ☀️
            </button>
          </li>
      </ul>
    </div>
  </nav>
);
};

export default Header;