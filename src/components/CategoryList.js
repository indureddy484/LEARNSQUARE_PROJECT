import React from 'react';

const CategoryList = ({ onSelectCategory }) => {
  const categories = ['Moisturizer', 'Sunscreen'];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
