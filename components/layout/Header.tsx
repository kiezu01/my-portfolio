import React from "react";

const Header: React.FC = () => (
  <nav className="main-nav">
    <div className="nav-container">
      <span className="nav-logo">Kien Vu</span>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">&#9776;</label>
      <ul className="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            className="download-cv-btn"
            href="assets/CV_VuTrungKien.pdf"
            download
          >
            Download CV
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;