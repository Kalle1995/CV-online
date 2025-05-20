import React from "react";
import "./Competence.css";

const Competence = () => {
  return (
    <div className="competence-container">
      <h2 className="section-title">Kompetens</h2>

      <div className="competence-section">
        <h3>Frontend Developer</h3>
        <p>
          Jag har goda kunskaper inom följande tekniker:
        </p>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React.js, Next.js, Angular</li>
          <li>TypeScript, Tailwind CSS, shadcn/ui</li>
          <li>Git, GitHub, API-integrationer, responsiv design</li>
        </ul>
      </div>

      <div className="competence-section">
        <h3>Microsoft 365</h3>
        <p>
          Inom Microsoft 365 har jag kunskaper i:
        </p>
        <ul>
          <li>SharePoint</li>
          <li>Power Platform (Power Apps, Power Automate, Power BI)</li>
          <li>Teams-integrationer</li>
          <li>OneDrive och Exchange-hantering</li>
        </ul>
      </div>

      <div className="competence-section">
        <h3>Data & IT</h3>
        <ul>
          <li>Allmän datorvana</li>
          <li>Grundläggande hårdvara och mjukvara</li>
          <li>Felsökning och problemlösning</li>
        </ul>
      </div>

      <div className="competence-section">
        <h3>Språk</h3>
        <ul>
          <li>Arabiska – Flytande</li>
          <li>Svenska – Goda kunskaper</li>
          <li>Engelska – Mycket bra</li>
        </ul>
      </div>

      <div className="competence-section">
        <h3>Övrigt</h3>
        <ul>
          <li>B-körkort</li>
        </ul>
      </div>
    </div>
  );
};

export default Competence;
