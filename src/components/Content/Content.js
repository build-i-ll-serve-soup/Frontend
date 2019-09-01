import React, { Component } from 'react';
import { axiosWithAuth } from '../Auth/axiosAuth';
import CategoryTabs from './CategoryTabs';
import ItemCards from './ItemCards';



import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      categoryTabs: [],
      itemCards: [],
      res: ''
    };
  }

  componentDidMount() {
    this.setState( {
        categoryTabs:tabData,
        itemCards: cardData,
    });
    console.log("mount")

    axiosWithAuth().get('https://bw-ill-serve-soup.herokuapp.com/api/items')
      .then( res => {
        this.setState({ res });
        console.log(this.state.res)
      })
      .catch( err => console.log("catch" + err))
      
  }

  changeSelected = categoryTab => {
    this.setState( {
      selected:categoryTab,
    })
  };

  filterCards = () => {

    if(this.state.selected==="all"){
      return this.state.itemCards
    } else {
      return this.state.itemCards.filter(itemCard => itemCard.category===this.state.selected)
    }
  };

  render() {
    return (
      <div className="content-container">
        <h2>Inventory:</h2>
        <CategoryTabs categoryTabs={this.state.categoryTabs} 
            selectedTab={this.state.selected} 
            selectTabHandler={this.changeSelected}
        />
        <ItemCards itemCards={this.filterCards()}
       />
      </div>
    );
  }
}
