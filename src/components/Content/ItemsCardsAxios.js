import React, {useState, useEffect} from "react";
import axios from "axios";

const ItemsCardsAxios = props =>{

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = () => {
            axios
            .get('https://bw-ill-serve-soup.herokuapp.com/api/users/items')
            .then(response => {
                setItems(response.data.items);
            })
            .catch(error => {
                console.log(error)
            });
        }
        getItems()
    }, [])

    
    return (
        <div className="axiosCards">
             <h1>Item Details from axios</h1>
            {items.map(item=> (
       <ItemsDetails key={item.id} item={item} />
     ))}
        </div>
    )
}
function ItemsDetails({item}) {
  const {name,quantity, category } = item; 
  return (
      <div>
          <h2>{name}</h2>
          <h3>{quantity}</h3>
          <p>{category}</p>
      </div>
  )
}
export default ItemsCardsAxios