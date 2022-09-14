import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import NavBar from './NavBar';
import ReviewForm from './ReviewForm';
import Signup from './Signup';
import Destinations from "./Destinations"

function App() {

  const [users, setUsers] = useState([])
  const [destinations, setDestinations] = useState([])

  // useEffect(() => {
  //   fetch("/users")
  //     .then(data => data.json())
  //     .then(data => console.log(data))
  // }, [])

  useEffect(() => {
      fetch("/destinations")
        .then(data => data.json())
        .then(data => setDestinations(data))
    }, [])


  return (

    <div className="App">
      <header>

      </header>
      <div id="app-body">
        <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          {/* <Route path='/destinations' element={<Destinations />}/> */}
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/review/create' element={<ReviewForm destinations={destinations} />}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
