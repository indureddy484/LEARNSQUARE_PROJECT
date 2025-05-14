import React from "react";
import "./FooterProductsGrid.css"; // Optional for separation
import footerProducts from "../data/footerProducts";

const FooterProductsGrid = () => {
  return (
    <section className="footer-products-wrapper">
      <h2>Popular Products</h2>
      <div className="footer-product-grid">
        {footerProducts.slice(0, 12).map((product) => (
          <div key={product.id} className="footer-product-card">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <div className="product-links">
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">Amazon</a> |
              <a href={product.officialLink} target="_blank" rel="noopener noreferrer">Official</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterProductsGrid;
