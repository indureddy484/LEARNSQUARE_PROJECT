
// src/pages/SubcategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const allProducts = {
  face: {
    'facial-cleanser': [{ name: 'Cleanser A', description: 'Gentle', price: '$12' }],
    'facial-moisturizer': [{ name: 'Moisturizer B', description: 'Hydrating', price: '$15' }],
    // Add others...
  },
  body: {
    'bar-soap': [{ name: 'Organic Soap', description: 'Natural', price: '$5' }],
    'body-wash': [{ name: 'Aloe Wash', description: 'Soothing', price: '$8' }],
  },
  hair: {
    'shampoo': [{ name: 'Volumizing Shampoo', description: 'For fine hair', price: '$10' }],
  },
  fragrance: {
    'body-spray': [{ name: 'Fresh Mist', description: 'Citrus', price: '$9' }],
  },
  'oral-care': {
    'toothpaste': [{ name: 'Fluoride Toothpaste', description: 'Minty fresh', price: '$4' }],
  }
};

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const items = allProducts[category]?.[subcategory] || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>{subcategory.replace(/-/g, ' ').toUpperCase()}</h2>
      {items.length ? (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {items.map((item, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              width: '200px',
              boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default SubcategoryPage;
