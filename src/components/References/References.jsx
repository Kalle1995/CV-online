import React from "react";
import "./References.css";
import { useTranslation } from "react-i18next";

const References = () => {
  const { t } = useTranslation();

  const references = t("references.items", { returnObjects: true });

  return (
    <div className="references-container">
      <h2 className="section-title">{t("references.title")}</h2>

      {references.map((ref, index) => (
        <div className="reference-item" key={index}>
          <h3>{ref.name}</h3>
          <p>{ref.position}</p>
          <p>
            Telefon: <a href={ref.phoneHref}>{ref.phone}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default References;
