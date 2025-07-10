import React from "react";

// Có thể mở rộng để nhận props:
// export interface SkillsProps {
//   skills: string[];
// }
// const Skills: React.FC<SkillsProps> = ({ skills }) => (
//   ...
// );

const Skills: React.FC = () => (
  <section id="skills" className="container centered-section">
    <h3>Skills</h3>
    <ul className="skills-grid">
      <li>SQL (PostgreSQL, SQL Server)</li>
      <li>Python (Pandas, Numpy)</li>
      <li>Power BI / Tableau</li>
      <li>Data Visualization</li>
      <li>Data Quality Control</li>
      <li>Excel (Advanced)</li>
      <li>ETL (Mage, SSIS)</li>
      <li>Google BigQuery</li>
      <li>Git & Jira</li>
    </ul>
  </section>
);

export default Skills;