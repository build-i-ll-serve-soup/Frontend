import React from 'react';

const ItemCard = props => {
  console.log(props)
  return (
    <div className="itemCard">
      <div className="itemName"><strong>{props.itemCard.itemName}</strong></div>
      <div className="stock">{props.itemCard.stock}</div>
      <div className="category">{props.itemCard.category}</div>
    </div>
  );
};

export default ItemCard;
