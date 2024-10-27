import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="border p-4 flex justify-between items-center mb-3">
      <div>
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>Quantity: 
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="ml-2 border w-12 text-center"
          />
        </p>
      </div>
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
