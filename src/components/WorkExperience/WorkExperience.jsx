import React from "react";
import "./WorkExperience.css";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../BackHomeButton/BackHomeButton"; // justera sökvägen om det behövs


const WorkExperience = () => {
  const { t } = useTranslation();
  const experiences = t("workExperience.items", { returnObjects: true });

  return (
    <div className="experience-container">
            <BackHomeButton />
      <h2>{t("workExperience.title")}</h2>

      {experiences.map((item, index) => (
        <div className="experience-item" key={index}>
          <h3>{item.position}</h3>
          <p className="location-date">{item.date}</p>
          {item.description && <p className="experience-description">{item.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
