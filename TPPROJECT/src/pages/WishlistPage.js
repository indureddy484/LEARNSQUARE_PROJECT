// src/pages/WishlistPage.jsimport React from "react";
import { useWishlist } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p>Rating: {item.rating}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default WishlistPage;
