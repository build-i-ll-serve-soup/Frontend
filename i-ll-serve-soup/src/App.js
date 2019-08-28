// import React, {useState, useEffect } from 'react';
// import axios from "axios"
import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import TabNav from "./components/TabNav";
import Home from "./components/Home"
import Login from "./components/Login";
import Signup from "./components/Signup"
import Content from './components/Content/Content';
import AddItemForm from "./AddItemForm"



function App() {

  // const [userData, setUserData] = useState([])

  // useEffect(() => {
  //   axios
  //   .get("https://bw-ill-serve-soup.herokuapp.com/")
  //   .then( res => {
  //     setUserData(res.data.results)
  //   })
  //   .catch( err => console.log(err))
  // })
  return (
    <div className="App">
  
      <TabNav />
        <Route exact path= "/" component={Home}/>
        <Route  path= "/login" component={Login}/>
        <Route  path= "/signup" component={Signup}/>
        <Route  path= "/content" component={Content}/>
        <Route  path= "/add-item" component={AddItemForm}/>
    </div>
  );
}

export default App;
