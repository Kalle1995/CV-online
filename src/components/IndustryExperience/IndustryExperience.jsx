import React from "react";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../BackHomeButton/BackHomeButton"; // anpassa sökvägen om nödvändigt
import "./IndustryExperience.css"; // skapa den här CSS-filen om du vill styla

const IndustryExperience = () => {
  const { t } = useTranslation();
  const industries = t("industryExperience.items", { returnObjects: true });

  return (
    <div className="industry-container">
      <BackHomeButton />
      <h2>{t("industryExperience.title")}</h2>

      {industries.map((item, index) => (
        <div className="industry-item" key={index}>
          <h3>{item.sector}</h3>
          <p className="industry-example"><strong>{item.example}</strong></p>
          <p className="industry-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IndustryExperience;
