import React from "react";
import "./Competence.css";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../BackHomeButton/BackHomeButton"; // justera sökvägen om det behövs


const Competence = () => {
  const { t } = useTranslation();

  const renderList = (items) =>
    items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="competence-container">
            <BackHomeButton />

      <h2 className="section-title">{t("competence.title")}</h2>

      <div className="competence-section">
        <h3>{t("competence.frontend.title")}</h3>
        <p>{t("competence.frontend.description")}</p>
        <ul>{renderList(t("competence.frontend.items", { returnObjects: true }))}</ul>
      </div>

      <div className="competence-section">
        <h3>{t("competence.m365.title")}</h3>
        <p>{t("competence.m365.description")}</p>
        <ul>{renderList(t("competence.m365.items", { returnObjects: true }))}</ul>
      </div>

      <div className="competence-section">
        <h3>{t("competence.it.title")}</h3>
        <ul>{renderList(t("competence.it.items", { returnObjects: true }))}</ul>
      </div>

      <div className="competence-section">
        <h3>{t("competence.languages.title")}</h3>
        <ul>{renderList(t("competence.languages.items", { returnObjects: true }))}</ul>
      </div>

      <div className="competence-section">
        <h3>{t("competence.other.title")}</h3>
        <ul>{renderList(t("competence.other.items", { returnObjects: true }))}</ul>
      </div>
    </div>
  );
};

export default Competence;
