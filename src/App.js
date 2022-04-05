import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './componnent/Header/Header';
import Missions from './componnent/Missions/Missions';
import Rocket from './componnent/Rockets/Rockets';

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
