import React from 'react';

const Categories = ({categories, filterItems}) => {
    return (
        <div className="btn-container">
          {
            categories.map((category) => {
              return <button value={category} className="filter-btn" onClick={filterItems}>{category}</button>
            })
          }
        </div>
    );
};

export default Categories;
