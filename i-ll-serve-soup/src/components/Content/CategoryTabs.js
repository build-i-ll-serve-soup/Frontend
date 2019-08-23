import React from 'react';
import CategoryTab from './CategoryTab';
import PropTypes from "prop-types"

const CategoryTabs = props => {
  return (
    <div className="tabs">
      <div className="categories">
        
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
  