
import React from 'react';
import './CategorySection.css';
import { Link } from 'react-router-dom'; 
const categories = [
  {
    title: 'FACE',
    img: 'https://static.ewg.org/skindeep/img/cat-face-body_C02.png',
    subItems: ['Facial Wash', 'Facial Moisturizer', 'SunScreen', 'Serum', 'Around Eye Cream']
  },
  {
    title: 'BODY',
    img: 'https://static.ewg.org/skindeep/img/cat-fragrance_C02.png',
    subItems: ['Bar Soap', 'Body Wash', 'Hand Cream', 'Body Lotion']
  },
  {
    title: 'HAIR',
    img: 'https://static.ewg.org/skindeep/img/cat-hair_C02.png',
    subItems: ['Shampoo', 'Conditioner', 'Serum', 'Hair Color', 'Styling Gel', 'Shaving Cream']
  },
  {
    title: 'FRAGRANCE',
    img: 'https://static.ewg.org/skindeep/img/cat-fragrance_C02.png',
    subItems: ['Body Spray', 'Fragrance For Men', 'Fragrance For Women']
  },
  
];

const CategorySection = () => {
  return (
    <section className="browse-categories">
      <h3 className="tac">Browse our product categories</h3>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="cat-block">
            <div className="category-wrapper">
              <img src={cat.img} alt={cat.title} loading="lazy" />
              <div className="cat-title">{cat.title}</div>
            </div>
            <div className="hover-menu">
              <div className="column-left">
                <ul>
                  {cat.subItems.map((item, i) => {
                    const categorySlug = cat.title.toLowerCase().replace(/\s+/g, '-');
                    const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <li key={i}>
                        <Link to={`/${categorySlug}/${itemSlug}`}>
                          <div>{item}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
