import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage'

function App() {


  return (

    <div className="App">
      <header>

      </header>
      <body id="app-body">
        <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
