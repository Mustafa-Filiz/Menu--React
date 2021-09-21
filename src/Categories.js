import React from 'react';

const Categories = ({filterItems, showAll}) => {
    return (
        <div className="btn-container">
          <button className="filter-btn" onClick={showAll}>All</button>
          <button className="filter-btn" value="breakfast" onClick={filterItems}>Breakfast</button>
          <button className="filter-btn" value="lunch" onClick={filterItems}>Lunch</button>
          <button className="filter-btn" value="shakes" onClick={filterItems}>Shakes</button>
        </div>
    );
};

export default Categories;
