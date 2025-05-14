import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products'; // ✅ Static data fallback
import './SubcategoryPage.css';

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();

  // Filter products based on category and subcategory
  const filteredProducts = products.filter(
    p => p.category === category && p.subcategory === subcategory
  );

  return (
    <div className="subcategory-container">
      <h2>{subcategory.replace(/-/g, ' ')} Products</h2>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <Link
              key={product._id || product.id} // ✅ Use either _id (MongoDB) or id (static)
              to={`/product/${product.category}/${product.subcategory}/${product._id || product.id}`} // ✅ Dynamic fallback
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Image+Missing'; }}
              />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="price">₹{product.price}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SubcategoryPage;
