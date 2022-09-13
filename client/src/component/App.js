import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from '../logo.svg';
import Reviews from './Reviews';

function App() {


  return (
    <div className="App">
      <header>
      </header>
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} /> */}
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
