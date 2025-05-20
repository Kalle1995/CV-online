import React from "react";
import "./education.css";

const Education = () => {
  const openPDF = (path) => {
    window.open(`${import.meta.env.BASE_URL}${path}`, "_blank");
  };

  return (
    <div className="cv-container">
      <h2>Utbildningar</h2>

      <div className="education-item">
        <h3>Frontendutvecklare – Pågående</h3>
        <p className="location-date">Sverige | Augusti 2024 – Juni 2026</p>

        <p>Utbildningen omfattar bland annat:</p>
        <ul>
          <li><strong>Grund:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Moderna ramverk:</strong> React, Angular</li>
          <li><strong>Frontend:</strong> Next.js, TypeScript, Tailwind, shadcn, TanStack Query</li>
          <li><strong>Backend-utveckling:</strong> Express.js, SQL, C#, Web API, Entity Framework Core</li>
        </ul>
      </div>

      <div className="education-item">
        <h3>EC Utbildning – Microsoft 365 Developer</h3>
        <p className="location-date">Stockholm | 2022 – 2024</p>
        <p>Under utbildningen har jag studerat:</p>
        <ul>
          <li>Microsoft 365 Admin Center</li>
          <li>IT support och IT förvaltning inom M365</li>
          <li>Agil projektmetodik</li>
          <li>Teams och Teams Admin Center</li>
          <li>SharePoint Online och SharePoint Admin Center</li>
          <li>Power Platform (Power Automate, Power Apps, Power Virtual Agent, Power Pages, Power BI)</li>
          <li>Alla appar inom M365</li>
        </ul>
        <p className="study-period">Studietid: Augusti 2022 – Maj 2024</p>

        {/* PDF-knappar */}
        <div className="pdf-buttons">
          <button onClick={() => openPDF("intyg.pdf")} className="certificate-btn">
            Visa Intyg (PDF)
          </button>
          <button onClick={() => openPDF("/yh-exam-swe.pdf")} className="certificate-btn">
            YH-examen (Svenska)
          </button>
          <button onClick={() => openPDF("/yh-exam-eng.pdf")} className="certificate-btn">
            YH-examen (Engelska)
          </button>
        </div>
      </div>

      <div className="education-item">
        <h3>Gymnasieexamen</h3>
        <p className="location-date">Damascus, Syrien | 2012</p>
      </div>

      <div className="education-item">
        <h3>Microsoft 365 – Tidigare version</h3>
        <p className="location-date">Damascus | 2009</p>
        <p>En utbildning i den äldre versionen av Microsoft 365.</p>
      </div>
    </div>
  );
};

export default Education;
