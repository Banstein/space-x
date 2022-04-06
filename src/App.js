import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './componnent/Missions/Missions';
import Header from './componnent/Header/Header';
import Rocket from './componnent/Rocket/Rocket';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
