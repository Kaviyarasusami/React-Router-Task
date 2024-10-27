import React from 'react';
import CartItem from '../components/Cartitem';


const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.10; // 10% discount
  const finalPrice = total - discount;

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="mt-5">
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <p className="font-bold">Final Price: ${finalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
