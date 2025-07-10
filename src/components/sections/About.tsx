import React from "react";

// Hiện tại About không nhận props, nhưng có thể mở rộng:
// export interface AboutProps {
//   name: string;
//   title: string;
//   about: string;
//   email: string;
//   location: string;
//   linkedin: string;
//   github: string;
//   avatar: string;
// }
// const About: React.FC<AboutProps> = ({ ... }) => (
//   ...
// );

const About: React.FC = () => (
  <section id="about" className="about-main">
    <img src="assets/avatar.jpg" alt="VU TRUNG KIEN" className="about-avatar-large" />
    <div className="about-info">
      <h1>VU TRUNG KIEN</h1>
      <h2>Data Analyst | Reporting Specialist</h2>
      <p>
        Chuyên phân tích dữ liệu, tự động hóa báo cáo và xây dựng hệ thống ETL trong lĩnh vực tài chính, ngân hàng &amp; quản lý nợ.<br />
        Kỹ năng nổi bật về SQL, Python, Power BI, tối ưu hóa quy trình xử lý dữ liệu lớn.<br />
        Đam mê chuyển đổi dữ liệu thành insight giá trị và nâng cao hiệu quả kinh doanh.
      </p>
      <div className="about-contact">
        <a href="mailto:vutrungkien082002@gmail.com">📧 vutrungkien082002@gmail.com</a>
        <a href="https://linkedin.com/in/kienvu68" target="_blank" rel="noopener noreferrer">
          🔗 linkedin.com/in/kienvu68
        </a>
        <a href="https://github.com/kiezu01" target="_blank" rel="noopener noreferrer">
          🐙 github.com/kiezu01
        </a>
        <span>📍 Ho Chi Minh City, Vietnam</span>
      </div>
    </div>
  </section>
);

export default About;