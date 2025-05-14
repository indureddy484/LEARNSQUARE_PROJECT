import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/products/search?q=${query}`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setResults(data);
        } else {
          setResults([]);
          console.error("Unexpected response:", data);
        }
      } catch (err) {
        console.error("Error fetching results:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: <em>{query}</em></h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
  {results.map((product, index) => (
    <li
      key={index}
      style={{
        marginBottom: "15px",
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* ✅ Wrap in Link and point to product details URL */}
      <Link
        to={`/product/${product.category}/${product.subcategory}/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginTop: "10px",
            }}
          />
        )}
      </Link>
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default SearchResultsPage;
