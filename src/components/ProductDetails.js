import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Local fallback
import './ProductDetails.css';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showIngredients, setShowIngredients] = useState(false);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [wishlisted, setWishlisted] = useState(false);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${productId}`);
        const data = await res.json();

        if (res.ok) {
          setProduct(data);
        } else {
          console.warn("Product not found in backend, checking local fallback.");
          const localProduct = products.find(p => p._id === productId || p.id === productId);
          setProduct(localProduct || null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        const localProduct = products.find(p => p._id === productId || p.id === productId);
        setProduct(localProduct || null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // ✅ Load reviews from localStorage
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(productId)) || [];
    setReviews(savedReviews);
  }, [productId]);

  // ✅ Save reviews to localStorage
  useEffect(() => {
    localStorage.setItem(productId, JSON.stringify(reviews));
  }, [productId, reviews]);

  // ✅ Load wishlist state
  useEffect(() => {
    if (!product) return;
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isWishlisted = wishlist.some(item => item.id === product.id || item._id === product._id);
    setWishlisted(isWishlisted);
  }, [product]);

  const handleReviewSubmit = () => {
    const trimmed = review.trim();
    if (trimmed && !reviews.includes(trimmed)) {
      setReviews([...reviews, trimmed]);
      setReview('');
    }
  };

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlisted) {
      const updatedWishlist = wishlist.filter(item => (item.id || item._id) !== (product.id || product._id));
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlisted(false);
    } else {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setWishlisted(true);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    } catch {
      alert('Failed to copy link.');
    }
  };

  if (loading) return <p style={{ padding: '20px' }}>Loading product...</p>;
  if (!product) return <p style={{ padding: '20px' }}>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-left">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Image+Unavailable';
          }}
        />
        <p className="image-rating">
          <strong>CareCoder Rating:</strong> {product.rating || 'N/A'}⭐
        </p>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Features:</strong> {product.features || 'N/A'}</p>

        <div className="collapsible-section">
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
          </button>
          {showIngredients && product.ingredients && (
            <ul className="ingredient-list">
              {product.ingredients.split(',').map((ing, i) => (
                <li key={i}>{ing.trim()}</li>
              ))}
            </ul>
          )}
        </div>

        <p><strong>Description:</strong> {product.description}</p>

        <div className="button-group">
          {product.officialLink && (
            <a href={product.officialLink} target="_blank" rel="noopener noreferrer">
              <button className="link-button">Official Website</button>
            </a>
          )}
          {product.amazonLink && (
            <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
              <button className="link-button">Amazon</button>
            </a>
          )}
        </div>

        <div className="action-icons">
          <span
            onClick={handleWishlistToggle}
            title="Add to Wishlist"
            role="button"
            aria-label="Add to Wishlist"
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
