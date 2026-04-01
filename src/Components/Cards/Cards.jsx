import { use } from 'react';
import Card from './Card';

const Cards = ({ CardData ,cartItems, setCartItems}) => {
    const data =use(CardData);
    
    // console.log(data);
    return (
        <>
        <div className='grid grid-cols-3 max-w-7xl mx-auto gap-5 mb-40'>
        {data.map(card => <Card key={card.id} card={card} cartItems={cartItems} setCartItems={setCartItems} />)}
        </div>
        </>
    );
};

export default Cards;