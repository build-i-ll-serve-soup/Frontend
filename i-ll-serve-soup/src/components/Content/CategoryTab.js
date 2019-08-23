import React from 'react';
import PropTypes from "prop-types";

const CategoryTab = props => {

      let tabCategory = "";
    //   console.log(props)
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
      {props.categoryTab}
    </div>
  );
};


CategoryTab.propTypes = {
  categoryTab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default CategoryTab;
