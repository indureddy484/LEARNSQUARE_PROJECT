import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductList = ({ products }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const toggleWishlist = (e, item) => {
    e.stopPropagation(); // Prevent navigation when clicking the heart icon
    isInWishlist(item.id) ? removeFromWishlist(item.id) : addToWishlist(item);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="border p-4 rounded shadow relative hover:bg-gray-50 transition"
        >
          <button
            className="absolute top-2 right-2 text-red-500 z-10"
            onClick={(e) => toggleWishlist(e, item)}
          >
            {isInWishlist(item.id) ? <FaHeart /> : <FaRegHeart />}
          </button>

          <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{item.name}</h2>
          <p className="text-sm text-gray-600">Brand: {item.brand}</p>
          <p>Rating: ⭐ {item.rating}</p>
          <h3 className="font-semibold mt-2">Ingredients:</h3>
          <ul className="list-disc ml-5 text-sm">
            {item.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
