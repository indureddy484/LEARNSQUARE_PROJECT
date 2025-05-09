import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
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
        </div>
      ))}
    </div>
  );
};

export default ProductList;
