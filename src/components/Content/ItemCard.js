import React from 'react';

const ItemCard = props => {
  console.log(props)
  return (
    <div className="itemCard" >
      <div className="itemName"><strong><h2>{props.itemCard.name}</h2></strong></div>
      <div className="stock">Quantity: </div>
      {props.itemCard.amount}
      <div className="category">Category: </div>
      <strong>{props.itemCard.category}</strong>
    </div>
  );
};

export default ItemCard;
