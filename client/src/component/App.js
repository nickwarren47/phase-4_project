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
import DestReviews from './DestReviews'

function App() {

  // const [users, setUsers] = useState([]);
  // const [reviews, setReviews] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null)
  const [destReviews, setDestReviews] = useState([])

  const fetchData = (urlParams = "", setter) => {
    fetch(`${urlParams}`)
      .then((res) => res.json())
      .then((data) => setter(data));
  };

  useEffect(() => {
    // fetchData("users", setUsers);
    // fetchData("reviews", setReviews);
    fetchData("destinations", setDestinations);
  }, []);

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

  // function renderUsers(user) {
  //   setUsers([...users, user])
  // }

  function renderDestinations(destination) {
    setDestinations([...destinations, destination])
  }

  // function renderReviews(review) {
  //   setReviews([...reviews, review])
  // }

  function handleDestClick(e) {
    fetchData(`destinations/${e.target.id}`, setDestReviews)
  }

  return (

    <div className="App">
      <header>

      </header>
      <div id="app-body">
        <AuthProvider>
          <Router>
            <NavBar user={user} onLogout={handleLogout} />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/signup' element={<Signup onLogin={setUser} />} />
              {user ? (<h2>Welcome, {user.username}!</h2>) : <Route path='/login' element={<Login />} />}
              {/* <Route path='/users' element={<Users users={users} />} /> */}
              <Route path='/create' element={<ReviewForm destinations={destinations} />} />
              <Route path='/destinations' element={<Destinations destinations={destinations} handleDestClick={handleDestClick} destReviews={destReviews} />} />
              <Route path='/destination-reviews' element={<DestReviews destinations={destinations} destReviews={destReviews} />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
