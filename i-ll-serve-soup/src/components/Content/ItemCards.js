import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from "prop-types"


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


ItemCards.propTypes = {
  itemCards: PropTypes.array,
}
export default ItemCards;