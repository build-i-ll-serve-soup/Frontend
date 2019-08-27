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


class TableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
    <tr>
      <td key={data.name}>{data.name}</td>
      <td key={data.id}>{data.id}</td>
      <td key={data.price}>{data.price}</td>
    </tr>
    );
    return (
      <span>{row}</span>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <TableRow data={this.props.data} />
      </table>
    );
  }
}
