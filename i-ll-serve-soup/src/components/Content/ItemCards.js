import React from 'react';
import ItemCard from './ItemCard';



const ItemCards = props => {
  return (
    <div className="itemCards-container">
          {props.itemCards.map(itemCard => {
            return(
              <div>
              <ItemCard
               itemCard={itemCard} 
               key={ItemCard.itemName}/>
            
               </div>
            )
          })}
    </div>
  )
}

export default ItemCards;


