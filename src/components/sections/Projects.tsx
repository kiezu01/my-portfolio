import React from "react";
// import { Project } from "@/types/cv";

// Có thể mở rộng để nhận props:
// export interface ProjectsProps {
//   projects: Project[];
// }
// const Projects: React.FC<ProjectsProps> = ({ projects }) => (
//   ...
// );

const Projects: React.FC = () => (
  <section id="projects" className="container centered-section">
    <h3>Featured Projects</h3>
    <div className="projects-grid">
      <div className="project-card">
        <img src="assets/uber-etl.png" alt="Uber ETL Pipeline Screenshot" />
        <div>
          <h4>ETL Pipeline for Uber Data Analysis</h4>
          <p>
            Thiết kế ETL pipeline với Mage &amp; BigQuery, xử lý 100.000+ bản ghi Uber, tạo dashboard Looker giúp dự báo nhu cầu theo vùng.<br />
            <span className="project-impact">→ Giảm 50% thời gian xử lý thủ công</span>
          </p>
          <a href="https://github.com/kiezu01/uber-etl-pipeline" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="assets/finance-dashboard.png" alt="Finance Dashboard Screenshot" />
        <div>
          <h4>Debt Management Dashboard</h4>
          <p>
            Xây dựng dashboard Power BI cho quản lý thu hồi nợ, tích hợp dữ liệu đa nguồn, realtime tracking KPI.<br />
            <span className="project-impact">→ Tối ưu phân bổ hợp đồng, tăng tỷ lệ thu hồi 15%</span>
          </p>
          <a href="https://github.com/kiezu01/debt-dashboard" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="assets/payment-auto.png" alt="Payment Automation Script Screenshot" />
        <div>
          <h4>Automated Payment Reconciliation</h4>
          <p>
            Tự động hóa đối soát dữ liệu thanh toán ngân hàng bằng Python &amp; SQL.<br />
            <span className="project-impact">→ Đạt 99% độ chính xác báo cáo tài chính</span>
          </p>
          <a href="https://github.com/kiezu01/payment-recon" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;