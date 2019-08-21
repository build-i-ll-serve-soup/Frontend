import React from 'react';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <h1>I'll Serve Soup</h1>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
