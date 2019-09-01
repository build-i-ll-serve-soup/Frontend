import React from 'react';

const CategoryTab = props => {

      let tabCategory = "";
      console.log(props)
      if(props.categoryTab === props.selectedTab) {
        tabCategory = "tab active-tab"
      } else {
        tabCategory = "tab"
      }
      
     
  return (
    <div
      className = {tabCategory}
      onClick = {() => {
        props.selectTabHandler(props.categoryTab)
      }}
    >
      {props.categoryTab.toUpperCase()}
    </div>
  );
};




export default CategoryTab;
