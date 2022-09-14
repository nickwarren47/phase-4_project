import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import NavBar from './NavBar';
import ReviewForm from './ReviewForm';
import Signup from './Signup';
import Users from './Users';
// import Reviews from './Reviews';
import Destinations from './Destinations';

const baseUrl = 'http://localhost:3000';


function App() {

  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const fetchData = (urlParams = "", setter) => {
    fetch(`${baseUrl}/${urlParams}`)
      .then((res) => res.json())
      .then((data) => setter(data));
  };

  useEffect(() => {
    fetchData("users", setUsers);
    fetchData("reviews", setReviews);
    fetchData("destinations", setDestinations)
  }, []);

  function renderUsers(user) {
    setUsers([...users, user])
  }

  function renderDestinations(destination) {
    setUsers([...users, destination])
  }

  function renderReviews(review) {
    setReviews([...reviews, review])
  }

  return (

    <div className="App">
      <header>

      </header>
      <div id="app-body">
        <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/users' element={<Users users={users}/>} />
          {/* <Route path='/reviews' element={<Reviews reviews={reviews}/>} /> */}
          <Route path='/destinations' element={<Destinations destinations={destinations}/>} />
        </Routes>
      </body>
          <Route path='/review/create' element={<ReviewForm destinations={destinations} />}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
