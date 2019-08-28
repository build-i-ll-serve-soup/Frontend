import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
function App() {
  const [ isLoggedIn, setLoggedin ] = useState(true);

  return (
    <div className="App">
      <Nav login={isLoggedIn} setLoggedin={setLoggedin}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
