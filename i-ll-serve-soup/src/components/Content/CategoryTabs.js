import React from 'react';
import CategoryTab from './CategoryTab';



const CategoryTabs = props => {
  return (
 
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
   
  );
};

  export default CategoryTabs;

  
  