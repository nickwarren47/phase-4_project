import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import NavBar from './NavBar';
import ReviewForm from './ReviewForm';
import Signup from './Signup';
import AboutUs from './AboutUs';
import Destinations from './Destinations';
import Login from './Login';
import AuthProvider from './AuthProvider';
import ReviewCard from "./ReviewCard"

function App() {

  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {

    fetch("/destinations")
      .then(data => data.json())
      .then(data => setDestinations(data))
  }, [])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    setUser(null);
  }

  return (

    <div className="App">
        <AuthProvider>
          <Router>
            <NavBar user={user} onLogout={handleLogout} />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/signup' element={<Signup onLogin={setUser} />} />
              {user ? (<h2>Welcome, {user.username}!</h2>) : <Route path='/login' element={<Login />} />}
              <Route path='/create' element={<ReviewForm destinations={destinations} />} />
              <Route path='/destinations' element={<Destinations destinations={destinations} />} />
              <Route path='/destinations/:id' element={<ReviewCard destinations={destinations} />} />
            </Routes>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
