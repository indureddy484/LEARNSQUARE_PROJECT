import React from 'react';
import './BlogsPage.css'; // Make sure this file contains styling
import BlogCard from './BlogCard'; // ✅ import your component
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';

const BlogsPage = () => {
  return (
    <div className="blog-container">
      <BlogCard
        imageSrc={blog1}
        altText="skincare Tips"
        title="How to know your skin?"
        excerpt="Discover your true skin type and learn how to care for it with confidence"
        link="/know-your-skin-type"
        id="1"
      />
      <BlogCard
        imageSrc={blog2}
        altText="acne prevention Importance"
        title="Understanding Acne: Causes, Myths, and Remedies"
        excerpt="Uncover the real reasons behind breakouts, bust common acne myths, and explore effective treatments for clearer skin"
        link="#"
        id="2"
      />
      <BlogCard
        imageSrc={blog3}
        altText="Daily Comfort"
        title="The Truth About Hair Fall"
        excerpt="Explore the hidden causes of hair fall and discover practical ways to restore your hair’s strength and volume."
        link="#"
        id="3"
      />
    </div>
  );
};

export default BlogsPage;
