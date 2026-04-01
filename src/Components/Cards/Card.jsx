import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';

const Card = ({card, cartItems, setCartItems}) => {
    const {name,description,price,period,tag,features,icon} = card;
    const [buyNow,setBuyNow] = useState(false);
    const handleBuyNow = () => {
        const isAllReadyInCart = cartItems.find(item => item.id === card.id);
        if(isAllReadyInCart){
            alert('This item is already in the cart');
            return;
        }
        setBuyNow(true);
        setCartItems( [...cartItems,card]);
    }
    // console.log(name);
    return (
        <>
        <div>
            <div className=" relative shadow border-2 border-gray-200 rounded-lg p-6  space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className='w-15 h-15 p-2  border border-gray-200  flex items-center justify-center rounded-full '>
                <img className='p-2' src={icon}  alt="" />
                </div>
                <span className= {`absolute top-2 right-2 ${tag == 'Popular' ? 'bg-orange-100 text-orange-400' : tag == 'New' ? 'bg-green-100 text-green-500' : 'bg-blue-100 text-purple-500'} px-4 py-2 rounded-full`}>{tag}</span>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-gray-500'>{description}</p>
                <div className='flex items-center'>
                    <h3 className='text-2xl font-bold'>${price}</h3>
                    <p className='text-gray-500'>/{period}</p>
                </div>
                {features.map((feature,index) => <p key={index} className='flex items-center text-gray-500 gap-2'><MdDone className='text-green-400 text-2xl' />{feature}</p>)}
                <button  onClick={handleBuyNow} className={`btn rounded-full bg-linear-to-r ${buyNow ? 'bg-success shadow shadow-green-200':'from-[#4F39F6] to-[#9514FA]'}  text-white py-6 font-bold w-full`}>{buyNow ? 'Purchased' : 'Buy Now'}</button>
            </div>
        </div>
        </>
    );
};

export default Card;