import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProjectsList from "./components/ProjectsList";
import HomePage from "./Homepage";
import FindMePage from "./components/FindMePage";
import MainProjectPage from "./components/main-project-page/MainProjectPage";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen
        min-w-screen
bg-gradient-to-b from-primary to-gray-600"
      >
        <h1 className="text-secondary
        text-7xl
        text-top
        pt-12">Jahid Hassan's Portfolio </h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/findme" element={<FindMePage />} />
          <Route path="/projects/:project_id" element={<MainProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
