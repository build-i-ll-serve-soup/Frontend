import React from 'react';

const ItemCard = props => {
  console.log(props)
  return (
    <div className="itemCard">
      <div className="itemName"><strong><h3>{props.itemCard.itemName}</h3></strong></div>
      <div className="stock">Quantity:  {props.itemCard.stock}</div>
      <div className="category">Category: <strong>{props.itemCard.category}</strong></div>
    </div>
  );
};

export default ItemCard;
