import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../App.css';

function Kitchens() {
  const [ kitchenList, setKitchenList ] = useState([]);

  useEffect(() => {
    axios.get('https://bw-ill-serve-soup.herokuapp.com/api/kitchens')
      .then( res => {
        setKitchenList(res.data)
      })
  }, []);

  return (
    <div className="kitchens">
      <h1>Our wonderful partners</h1>
      {
        kitchenList.map( kitchen => {
          return <div className="kitchen-card">
            <h3>{kitchen.name}</h3>
            <p>{kitchen.mission}</p>
            <a href='#'>{kitchen.website}</a>
            <p>{kitchen.location}</p>
          </div>
        })
      }
    </div>
  );
}

export default Kitchens;
