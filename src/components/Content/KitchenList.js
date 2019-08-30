import React, { useState, useEffect } from "react";
import axios from "axios";

const KitchenList = props => {
    const [kitchens, setKitchens] = useState([]);

    useEffect(() => {
        const getKitchens = () => {
          axios
            .get("https://bw-ill-serve-soup.herokuapp.com/api/kitchens")
            .then(response => {
              setKitchens(response.data);
            })
            .catch(error => {
              console.error("Server Error", error);
            });
        };
        getKitchens();
      }, []);
      return (
        <div className="kitchen-list">
          {kitchens.map(kitchen => (
            <KitchenDetails key={kitchen.id} kitchen={kitchen} />
          ))}
        </div>
      );
     };
     
     function KitchenDetails({ kitchen }) {
        const {name,location, mission,website } = kitchen;
        return (
            <div>
                <h2>{name}</h2>
                <h4>{location}</h4>
                <p>{mission}</p>
                <h4>{website}</h4>
            </div>
        )
     }


export default KitchenList