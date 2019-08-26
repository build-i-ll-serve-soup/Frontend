import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [ login, setLogin ] = useState(false);

  return (
    <div className="App">
      { login ? <h1>logged in</h1> : <Nav login={login} setLogin={setLogin}/> }
    </div>
  );
}

export default App;
