import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Content from './components/Content/Content';
import AddItemForm from "./AddItemForm";
import FormikKitchenForm from "./AddKitchenForm";

function App() {
  const [ isLoggedIn, setLoggedin ] = useState(false);

  return (
    <div className="App">
      <Nav login={isLoggedIn} setLoggedin={setLoggedin}/>
      <Route path="/login" render={(props) => (<Login {...props} loggedIn={isLoggedIn} setLoggedin={setLoggedin}/>)} />
      <Route path="/signup" component={Signup} />
      <Route path="/inventory" component={Content} />
      <Route path="/addItem" component={AddItemForm} />
      <Route path="/addKitchen" component={FormikKitchenForm} />
      { isLoggedIn ? <Redirect exact from="/login" to="/inventory"></Redirect> : <Redirect exact from="/" to="/login" />}
    </div>
  );
}

export default App;
