
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetails.css';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  const [showIngredients, setShowIngredients] = useState(false);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [wishlisted, setWishlisted] = useState(false);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(productId)) || [];
    setReviews(savedReviews);
  }, [productId]);

  // Save reviews to localStorage
  useEffect(() => {
    localStorage.setItem(productId, JSON.stringify(reviews));
  }, [productId, reviews]);

  // Load wishlist state
  useEffect(() => {
    const wishlistedItems = JSON.parse(localStorage.getItem('wishlisted')) || {};
    setWishlisted(Boolean(wishlistedItems[productId]));
  }, [productId]);

  // Save wishlist state
  useEffect(() => {
    const wishlistedItems = JSON.parse(localStorage.getItem('wishlisted')) || {};
    wishlistedItems[productId] = wishlisted;
    localStorage.setItem('wishlisted', JSON.stringify(wishlistedItems));
  }, [wishlisted, productId]);

  if (!product) return <p>Product not found.</p>;

  const handleReviewSubmit = () => {
    const trimmed = review.trim();
    if (trimmed && !reviews.includes(trimmed)) {
      setReviews([...reviews, trimmed]);
      setReview('');
    }
  };

  const handleWishlistToggle = () => {
    setWishlisted(!wishlisted);
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-left">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=Image+Unavailable'; }}
        />
        <p className="image-rating"><strong>CareCoder Rating:</strong> {product.rating}⭐</p>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p><strong>Price Range:</strong> {product.price}</p>
        <p><strong>Features:</strong> {product.features || 'N/A'}</p>

        <div className="collapsible-section">
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
          </button>
          {showIngredients && (
            <ul className="ingredient-list">
              {product.ingredients?.split(',').map((ing, i) => (
                <li key={i}>{ing.trim()}</li>
              ))}
            </ul>
          )}
        </div>

        <p><strong>Description:</strong> {product.description}</p>

        <div className="button-group">
          <a href={product.officialLink} target="_blank" rel="noopener noreferrer">
            <button className="link-button">Official Website</button>
          </a>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
            <button className="link-button">Amazon</button>
          </a>
        </div>

        <div className="action-icons">
          <span
            onClick={handleWishlistToggle}
            title="Add to Wishlist"
            aria-label="Add to Wishlist"
            role="button"
          >
            {wishlisted ? <FaHeart className="icon wishlisted" /> : <FaRegHeart className="icon" />}
          </span>
          <FaShareAlt
            title="Share Product"
            className="icon"
            onClick={handleShare}
            aria-label="Share Product"
            role="button"
          />
        </div>

        <div className="review-section">
          <h4>Consumer Reviews</h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
          />
          <button onClick={handleReviewSubmit}>Submit Review</button>

          <ul className="reviews-list">
            {reviews.length > 0
              ? reviews.map((r, i) => <li key={i}>{r}</li>)
              : <li>No reviews yet.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
