import React from "react";

// Có thể mở rộng để nhận props:
// export interface ContactProps {
//   email: string;
//   location: string;
//   linkedin: string;
//   github: string;
// }
// const Contact: React.FC<ContactProps> = ({ ... }) => (
//   ...
// );

const Contact: React.FC = () => (
  <footer id="contact" className="footer-centered">
    <div className="footer-links">
      <a href="mailto:vutrungkien082002@gmail.com">📧 vutrungkien082002@gmail.com</a>
      <a href="https://linkedin.com/in/kienvu68" target="_blank" rel="noopener noreferrer">
        🔗 linkedin.com/in/kienvu68
      </a>
      <a href="https://github.com/kiezu01" target="_blank" rel="noopener noreferrer">
        🐙 github.com/kiezu01
      </a>
      <span>📍 Ho Chi Minh City, Vietnam</span>
    </div>
  </footer>
);

export default Contact;