import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaAddressCard, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="home-container">
      {/* Språkbytare toggle knapp */}
      <div className="language-switch-wrapper">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => i18n.changeLanguage(i18n.language === "sv" ? "en" : "sv")}
            checked={i18n.language === "en"}
            aria-label="Switch Language"
          />
          <span className="slider"></span>
        </label>
        <span className="language-label">{i18n.language === "sv" ? "Svenska" : "English"}</span>
      </div>

      <h1 className="name">{t("home.name", "Khaled Heteni")}</h1>
      <p className="bio">{t("home.bio", "Frontend Developer | Microsoft 365 Developer")}</p>

      <div className="profile-wrapper">
        <img
          src={import.meta.env.BASE_URL + "profile.jpg"}
          alt={t("home.profileAlt", "Profilbild")}
          className="profile-pic"
        />
        <div className="profile-overlay"></div>
      </div>

      <div className="buttons">
        <Link to="/education" className="btn">{t("home.links.education", "Utbildningar")}</Link>
        <Link to="/personal-letter" className="btn">{t("home.links.personalLetter", "Personligt Brev")}</Link>
        <Link to="/competence" className="btn">{t("home.links.competence", "Kompetens")}</Link>
        <Link to="/work-experience" className="btn">{t("home.links.workExperience", "Arbetslivserfarenhet")}</Link>
        <Link to="/references" className="btn">{t("home.links.references", "References")}</Link>
      </div>

      <div className="about-me-text">
        <p>{t("home.about.line1", "Jag är en mångsidig person med erfarenhet av att arbeta inom olika områden. Men när det kommer till mitt passion så är det inom utveckling.")}</p>
        <p>{t("home.about.line2", "Min erfarenhet inom utveckling, kombinerat med mina naturliga färdigheter och starka intresse, gör mig till en kvalificerad kandidat för utvecklingsrelaterade jobb. Jag är en självgående person som gärna arbetar både i team och enskilt och har förmåga att ta initiativ och leverera resultat.")}</p>
        <p>{t("home.about.line3", "Jag talar flytande arabiska och har goda kunskaper i både engelska och svenska, vilket ger mig en fördel när det gäller att kommunicera effektivt.")}</p>
      </div>

      <button
        className="contact-toggle-btn"
        onClick={toggleContact}
        aria-expanded={showContact}
        aria-controls="contact-info"
      >
        <FaAddressCard style={{ marginRight: "8px" }} />
        {t("home.contactButton", "Kontakta mig")}
      </button>

      {showContact && (
        <div className="contact-info" id="contact-info">
          <p><FaPhone style={{ marginRight: "8px" }} /> <a href="tel:+46723145433">+46 72 314 54 33</a></p>
          <p><FaEnvelope style={{ marginRight: "8px" }} /> <a href="mailto:hetiny.khaled@gmail.com">hetiny.khaled@gmail.com</a></p>
        </div>
      )}

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/khaled-heteni-833758232/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Kalle1995"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
