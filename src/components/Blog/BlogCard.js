import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ imageSrc, altText, title, excerpt, id }) => {
  // Determine route based on ID
  let link = `/blogs/${id}`;
  if (id === "1") link = "/know-your-skin-type";
  else if (id === "2") link = "/Acne";
  else if (id === "3") link = "/hair-fall-remedies";
  return (
    <div className="blog-card">
      <img src={imageSrc} alt={altText} className="blog-image" />
      <div className="blog-text">
        <div className="text-bottom">
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <Link to={link} className="read-more-btn">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
