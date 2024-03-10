import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProjectsList from "./components/ProjectsList";
import HomePage from "./Homepage";
import FindMePage from "./components/FindMePage";

function App() {
  return (
    <Router>
      <>
        <h1>Jahid Hasssn"s Portfolio </h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsList />} />
        <Route path="/findme" element={<FindMePage/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
