import React from "react";
import { useWishlist } from "../context/WishlistContext";

const ProductPage = () => {
  const { addToWishlist } = useWishlist();

  const product = {
    id: 1,
    name: "Sunscreen",
    brand: "Brand X",
    rating: 4.5,
    ingredients: ["Water", "Aloe", "Vitamin E"],
    image: "sunscreen.jpg",
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert("Added to Wishlist!");
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductPage;
