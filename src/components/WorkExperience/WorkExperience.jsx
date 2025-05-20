import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="experience-container">
      <h2>Arbetslivserfarenhet</h2>

      <div className="experience-item">
        <h3>Hemtjänst – Nybro Kommun</h3>
        <p className="location-date">Januari 2020 – Nuvarande</p>
      </div>

      <div className="experience-item">
        <h3>Lärare (vikarie) – Paradisskolan, Nybro Kommun</h3>
        <p className="location-date">Februari 2024 – Juni 2024</p>
      </div>

      <div className="experience-item">
        <h3>Praktik – Twoday</h3>
        <p className="location-date">November 2023 – April 2024</p>
      </div>

      <div className="experience-item">
        <h3>Montör – Scania, Oskarshamn</h3>
        <p className="location-date">Oktober 2018 – Oktober 2019</p>
      </div>

      <div className="experience-item">
        <h3>Städare – Ekerum, Öland</h3>
        <p className="location-date">Januari 2016 – Oktober 2018</p>
      </div>

      <div className="experience-item">
        <h3>Säljare – Syrien</h3>
        <p className="location-date">2010 – 2012</p>
      </div>
    </div>
  );
};

export default WorkExperience;
