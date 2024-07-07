import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = ({ filters, setFilters }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked ? value : ''
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {expanded ? '<<' : '>>'}
      </button>
      <div className={`filter-component ${expanded ? 'expanded' : 'collapsed'}`}>
        <h3>Filter Fragrances</h3>
        <div className="filter-group">
          <h4>Price Range</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-200"
              onChange={handleChange}
              checked={filters.price === '0-200'}
            />
            $0 - $200
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="200-224"
              onChange={handleChange}
              checked={filters.price === '200-224'}
            />
            $200 - $224
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="225-270"
              onChange={handleChange}
              checked={filters.price === '225-270'}
            />
            $225 - $270
          </label>
        </div>
        <div className="filter-group">
          <h4>Fragrance Family</h4>
          <label>
            <input
              type="checkbox"
              name="floral"
              value="floral"
              onChange={handleChange}
              checked={filters.floral === 'floral'}
            />
            Floral
          </label>
          <label>
            <input
              type="checkbox"
              name="woody"
              value="woody"
              onChange={handleChange}
              checked={filters.woody === 'woody'}
            />
            Woody
          </label>
          <label>
            <input
              type="checkbox"
              name="citrus"
              value="citrus"
              onChange={handleChange}
              checked={filters.citrus === 'citrus'}
            />
            Citrus
          </label>
        </div>
        <div className="filter-group">
          <h4>Gender</h4>
          <label>
            <input
              type="radio"
              name="gender"
              value="men"
              onChange={handleChange}
              checked={filters.gender === 'men'}
            />
            Men
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="women"
              onChange={handleChange}
              checked={filters.gender === 'women'}
            />
            Women
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="unisex"
              onChange={handleChange}
              checked={filters.gender === 'unisex'}
            />
            Unisex
          </label>
        </div>
        <button className="clear-button" onClick={clearFilters}>Clear Filters</button>
      </div>
    </>
  );
};

export default FilterComponent;
