import React from 'react';
import './MenFragrances.css';

const filterProducts = (products, filters) => {
  let filteredProducts = products;

  if (filters.price) {
    const [min, max] = filters.price.split('-').map(Number);
    filteredProducts = filteredProducts.filter(
      (product) => parseFloat(product.price.substring(1)) >= min && parseFloat(product.price.substring(1)) <= max
    );
  }

  if (filters.floral) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('floral')
    );
  }

  if (filters.woody) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('woody')
    );
  }

  if (filters.citrus) {
    filteredProducts = filteredProducts.filter((product) =>
      product.notes.includes('citrus')
    );
  }

  if (filters.gender) {
    filteredProducts = filteredProducts.filter(
      (product) => product.gender === filters.gender
    );
  }

  return filteredProducts;
};

const MenFragrances = ({ filters, onAddToBag }) => {
  const products = [
    { id: 1, name: 'For Men', image: 'formen.jpeg', price: '$160', notes: ['woody'], gender: 'men' },
    { id: 2, name: 'Suave', image: 'suave.jpeg', price: '$170', notes: ['citrus'], gender: 'men' },
    { id: 3, name: 'Damascus', image: 'damascus.jpeg', price: '$220', notes: ['floral'], gender: 'men' },
    { id: 4, name: 'XVI', image: 'XVI.jpeg', price: '$250', notes: ['woody'], gender: 'men' },
  ];

  const filteredProducts = filterProducts(products, filters);

  return (
    <section id="men-fragrances" className="men-fragrances">
      <h2>Men's Fragrances</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-name-overlay">{product.name}</div>
            <p>{product.price}</p>
            <button onClick={() => onAddToBag(product)}>Add to Bag</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenFragrances;
