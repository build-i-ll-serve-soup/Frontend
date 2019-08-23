import React from 'react';
import CategoryTab from './CategoryTab';
import PropTypes from "prop-types"

const CategoryTabs = props => {
  return (
    <div className="tabs">
      <div className="categories">
        <span className="title">Categories:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      
      {props.categoryTabs.map((categoryTab,index) =>(
        
        <CategoryTab 
        categoryTab={categoryTab}
        index={index}
        selectTabHandler={props.selectTabHandler}
        selectedTab={props.selectedTab}
        />
      ))}
      </div>
    </div>
  );
};
// Make sure to use PropTypes to validate your types!
CategoryTabs.propTypes = {
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func,
    tabs: PropTypes.array,
  }
  export default CategoryTabs;
  