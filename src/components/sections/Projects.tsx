import React from "react";
import uberImg from "../../../assets/uber-etl.png";
import financeImg from "../../../assets/finance-dashboard.png";
import paymentImg from "../../../assets/payment-auto.png";

const Projects: React.FC = () => (
  <section id="projects" className="container centered-section fade-in" aria-label="Projects section" style={{ background: 'var(--card-bg)', color: 'var(--text)' }}>
    <h3>Featured Projects</h3>
    <div className="projects-grid">
      <div className="project-card">
        <img src={uberImg} alt="Uber ETL Pipeline Screenshot" loading="lazy" />
        <div>
          <h4>ETL Pipeline for Uber Data Analysis</h4>
          <p>
            Designed ETL pipeline using Mage & BigQuery to process 100,000+ Uber records and build a Looker dashboard for demand forecasting by region.<br />
            <span className="project-impact">→ Reduced manual processing time by 50%</span>
          </p>
          <a href="https://github.com/kiezu01/uber-etl-pipeline" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={financeImg} alt="Finance Dashboard Screenshot" loading="lazy" />
        <div>
          <h4>Debt Management Dashboard</h4>
          <p>
            Built Power BI dashboard for debt collection management, integrated multi-source data, real-time KPI tracking.<br />
            <span className="project-impact">→ Optimized contract allocation, increased collection rate by 15%</span>
          </p>
          <a href="https://github.com/kiezu01/debt-dashboard" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src={paymentImg} alt="Payment Automation Script Screenshot" loading="lazy" />
        <div>
          <h4>Automated Payment Reconciliation</h4>
          <p>
            Automated reconciliation of bank payment data with Python & SQL.<br />
            <span className="project-impact">→ Achieved 99% accuracy in financial reports</span>
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