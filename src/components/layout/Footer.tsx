import React from "react";

const Footer: React.FC = () => (
  <footer id="footer" className="footer-centered" aria-label="Footer">
    <div style={{ textAlign: 'center', width: '100%', fontSize: '0.98rem', color: 'var(--text)', padding: '12px 0' }}>
      © {new Date().getFullYear()} Vu Trung Kien. All rights reserved.
    </div>
  </footer>
);

export default Footer;