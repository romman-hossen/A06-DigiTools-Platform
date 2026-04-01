import React from "react";

const Cart = ({ cartItems , setCartItems }) => {
    const totalPrice = cartItems.reduce((total,item) => total + item.price,0);

    const handleDelete = (item) => {
        alert('item deleted')
        const removeItem = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(removeItem);
    }

    const handleCheckout = () => {
        alert('Checkout successful!');
        setCartItems([]);
    }
    
  return (
    <div className="max-w-7xl mx-auto mb-10 p-20  shadow border border-gray-100 rounded-lg space-y-5">
        <h3 className="text-3xl font-bold">Your Cart</h3>
        {cartItems.length === 0 ? <p className="text-gray-500">Your cart is empty. Start adding some products!</p> :  <>
        {cartItems.map(item => (
            <div key={item.id} className="bg-gray-100 p-5 flex justify-between items-center rounded-lg shadow mb-4">
                <div className="flex items-center gap-4">
                    <div className='w-15 h-15 p-2 bg-white  border border-gray-200  flex items-center justify-center rounded-full '>
                        <img className="p-2" src={item.icon} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="font-medium text-gray-500">${item.price}</span>
                    </div>
                </div>
                <h3 className="text-error font-bold hover:btn btn-error hover:text-black " onClick={() => handleDelete(item)}>Remove</h3> 
            </div>
        ))}
        </>}
       
        <div className="flex justify-between p-3">
            <p>Total:</p>
            <h3>${totalPrice}</h3>
        </div>
        <button onClick={handleCheckout} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full p-6 font-bold rounded-full">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
