import React from "react";
import "./References.css";

const References = () => {
  return (
    <div className="references-container">
      <h2 className="section-title">Referenser</h2>

      <div className="reference-item">
        <h3>Emma Freding</h3>
        <p>Handlare, Twoday företag</p>
        <p>Telefon: <a href="tel:+46708295611">070-829 56 11</a></p>
      </div>

      <div className="reference-item">
        <h3>Jens Carlsson</h3>
        <p>Chef, Scania</p>
        <p>Telefon: <a href="tel:+46768919044">076-891 90 44</a></p>
      </div>

      <div className="reference-item">
        <h3>Aurelia</h3>
        <p>Chef, Hemtjänst</p>
        <p>Telefon: <a href="tel:+46702896533">070-289 65 33</a></p>
      </div>

      <div className="reference-item">
        <h3>Maddalene Palo</h3>
        <p>Chef, Hemtjänst</p>
        <p>Telefon: <a href="tel:+4648145647">0481 456 47</a></p>
      </div>

    </div>
  );
};

export default References;
