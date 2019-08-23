import React from 'react';
import PropTypes from "prop-types"

const ItemCard = props => {
  return (
    <div className="itemCard">
      <div className="itemName"><strong>{props.itemCard.itemName}</strong></div>
      <div className="stock">{props.itemCard.stock}</div>
      <div className="category">{props.itemCard.category}</div>
    </div>
  );
};

ItemCard.propTypes = {
itemName: PropTypes.string,
stock: PropTypes.string,
category: PropTypes.string,
}

export default ItemCard;
