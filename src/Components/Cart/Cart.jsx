import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="max-w-7xl mx-auto mb-10  bg-red-500">
        {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}/{item.period}</p>
            </div>
        ))}
    </div>
  );
};

export default Cart;
