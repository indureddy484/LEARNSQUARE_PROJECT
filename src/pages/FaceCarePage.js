// src/pages/FaceCarePage.js
import React, { useState } from 'react';
import faceCareProducts from '../data/products';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const FaceCarePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Moisturizer');

  const filteredProducts = faceCareProducts.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Toxic-Free Face Care</h1>
      <CategoryList onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default FaceCarePage;
