import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Education from "./components/education/education";
import PersonalLetter from "./components/personalLetter/personalLetter";
import Competence from "./components/competence/competence";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import References from "./components/References/References";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/personal-letter" element={<PersonalLetter />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/references" element={<References />} />
      </Routes>
  );
};

export default App;
