import React from "react";
import { useTranslation } from "react-i18next";
import "./education.css";
import BackHomeButton from "../BackHomeButton/BackHomeButton"; // justera sökvägen om det behövs


const Education = () => {
  const { t } = useTranslation();

  const openPDF = (path) => {
    window.open(`${import.meta.env.BASE_URL}${path}`, "_blank");
  };

  return (
    
    <div className="cv-container">
      <BackHomeButton />

      <h2>{t("education.title", "Utbildningar")}</h2>

      <div className="education-item">
        <h3>{t("education.frontend.title", "Frontendutvecklare – Pågående")}</h3>
        <p className="location-date">{t("education.frontend.locationDate", "Sverige | Augusti 2024 – Juni 2026")}</p>

        <p>{t("education.frontend.description", "Utbildningen omfattar bland annat:")}</p>
        <ul>
          <li><strong>{t("education.frontend.basicsLabel", "Grund")}:</strong> {t("education.frontend.basics", "HTML, CSS, JavaScript")}</li>
          <li><strong>{t("education.frontend.frameworksLabel", "Moderna ramverk")}:</strong> {t("education.frontend.frameworks", "React, Angular")}</li>
          <li><strong>{t("education.frontend.frontendLabel", "Frontend")}:</strong> {t("education.frontend.frontendTech", "Next.js, TypeScript, Tailwind, shadcn, TanStack Query")}</li>
          <li><strong>{t("education.frontend.backendLabel", "Backend-utveckling")}:</strong> {t("education.frontend.backendTech", "Express.js, SQL, C#, Web API, Entity Framework Core")}</li>
        </ul>
      </div>

      <div className="education-item">
        <h3>{t("education.microsoft365.title", "EC Utbildning – Microsoft 365 Developer")}</h3>
        <p className="location-date">{t("education.microsoft365.locationDate", "Stockholm | 2022 – 2024")}</p>
        <p>{t("education.microsoft365.description", "Under utbildningen har jag studerat:")}</p>
        <ul>
          <li>{t("education.microsoft365.items.m365Admin", "Microsoft 365 Admin Center")}</li>
          <li>{t("education.microsoft365.items.itSupport", "IT support och IT förvaltning inom M365")}</li>
          <li>{t("education.microsoft365.items.agile", "Agil projektmetodik")}</li>
          <li>{t("education.microsoft365.items.teams", "Teams och Teams Admin Center")}</li>
          <li>{t("education.microsoft365.items.sharepoint", "SharePoint Online och SharePoint Admin Center")}</li>
          <li>{t("education.microsoft365.items.powerPlatform", "Power Platform (Power Automate, Power Apps, Power Virtual Agent, Power Pages, Power BI)")}</li>
          <li>{t("education.microsoft365.items.allApps", "Alla appar inom M365")}</li>
        </ul>
        <p className="study-period">{t("education.microsoft365.studyPeriod", "Studietid: Augusti 2022 – Maj 2024")}</p>

        <div className="pdf-buttons">
          <button onClick={() => openPDF("/intyg.pdf")} className="certificate-btn">
            {t("education.microsoft365.certificates.certificate", "Visa Intyg (PDF)")}
          </button>
          <button onClick={() => openPDF("/yh-exam-swe.pdf")} className="certificate-btn">
            {t("education.microsoft365.certificates.yhExamSwe", "YH-examen (Svenska)")}
          </button>
          <button onClick={() => openPDF("/yh-exam-eng.pdf")} className="certificate-btn">
            {t("education.microsoft365.certificates.yhExamEng", "YH-examen (Engelska)")}
          </button>
        </div>
      </div>

      <div className="education-item">
        <h3>{t("education.highschool.title", "Gymnasieexamen")}</h3>
        <p className="location-date">{t("education.highschool.locationDate", "Damascus, Syrien | 2012")}</p>
      </div>

      <div className="education-item">
        <h3>{t("education.microsoft365Old.title", "Microsoft 365 – Tidigare version")}</h3>
        <p className="location-date">{t("education.microsoft365Old.location", "Damascus | 2009")}</p>
        <p>{t("education.microsoft365Old.description", "En utbildning i den äldre versionen av Microsoft 365.")}</p>
      </div>
    </div>
  );
};

export default Education;
