import React from 'react';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <h1>I'll Serve Soup</h1>
      <h2>Login Form</h2>
      <Login />
      <h2>SignUp Form</h2>
      <Signup />
    </div>
  );
}

export default App;
