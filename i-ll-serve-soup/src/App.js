import React, {useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {

  const [userData, setUserData] = useState([])


  useEffect(() => {
    axios
    .get("https://bw-ill-serve-soup.herokuapp.com/")
    .then( res => {
      setUserData(res.data.results)
      console.log(res.data.result)
      console.log(userData)
    })
    .catch( err => console.log(err))
  })
  return (
    <div className="App">
      <Navigation />
      <Route exact path= "/" component={Home}/>
      <Route  path= "/login" component={Login}/>
      <Route  path= "/signup" component={Signup}/>
    </div>
  );
}

export default App;
