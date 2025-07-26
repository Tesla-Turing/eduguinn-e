// Fichier principal : App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursParticuliers from './pages/CoursParticuliers';
import DonnerCours from './pages/DonnerCours';
import Agence from './pages/Agence';
import Tarifs from './pages/Tarifs';
import Connexion from './pages/Connexion';
import ProfilProf from './pages/ProfilProf';
import AdminPanel from './pages/AdminPanel';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cours" element={<CoursParticuliers />} />
        <Route path="/donner-cours" element={<DonnerCours />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/professeur" element={<ProfilProf />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
