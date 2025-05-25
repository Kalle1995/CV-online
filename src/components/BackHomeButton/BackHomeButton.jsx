import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // eller välj en annan ikon du gillar
import "./BackHomeButton.css";

const BackHomeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Visa inte knappen om man är på hemsidan
  if (location.pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={() => navigate("/")}
      className="back-home-btn"
      aria-label="Tillbaka till startsidan"
    >
      <FaHome size={24} />
    </button>
  );
};

export default BackHomeButton;
