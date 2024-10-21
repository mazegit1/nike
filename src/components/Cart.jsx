import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page bg-[#f5f5f5] p-8">
      <h1 className="text-5xl font-medium mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-2xl">Your cart is empty.</p>
      ) : (
        <div className="cart-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item p-4 bg-white shadow-md rounded-lg text-center">
              <img src={item.image} alt={item.title} className="mb-4 h-[200px] w-full" />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.price}</p>
              <button 
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
