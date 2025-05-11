
import React, { useEffect, useState } from 'react';
import './WishlistPage.css'; // Optional: for styling

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlist.filter(product => product.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  if (wishlist.length === 0) return <p>No products in wishlist.</p>;

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(product => (
          <div key={product.id} className="wishlist-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
