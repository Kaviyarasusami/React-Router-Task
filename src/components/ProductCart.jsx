import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-5">
      <img src={product.image} alt={product.title} className="w-60 h-70 object-cover" />
      <h3 className="font-bold mt-3">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="mt-3 bg-blue-500 text-white p-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;