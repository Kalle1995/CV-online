import React from "react";
import { useTranslation } from "react-i18next";
import "./PersonalLetter.css";
import BackHomeButton from "../BackHomeButton/BackHomeButton"; // justera sökvägen om det behövs


const PersonalLetter = () => {
  const { t } = useTranslation();

  return (
    <div className="personal-letter-container">
            <BackHomeButton />
      <h2 className="section-title">{t("personalLetter.title")}</h2>
      <p>{t("personalLetter.paragraph1")}</p>
      <p>{t("personalLetter.paragraph2")}</p>
      <p>{t("personalLetter.paragraph3")}</p>
      <p>{t("personalLetter.paragraph4")}</p>
      <p>{t("personalLetter.paragraph5")}</p>
      <p>{t("personalLetter.paragraph6")}</p>
      <p>{t("personalLetter.closing")}</p>
    </div>
  );
};

export default PersonalLetter;
