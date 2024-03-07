import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProjectsList from "./ProjectsList";
import HomePage from "./Homepage";

function App() {
  return (
    <Router>
      <>
        <h1>Jahid Hasssn"s Portfolio </h1>
        <NavBar />
        <Routes>
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
