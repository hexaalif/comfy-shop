import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    // console.log(item)
    const {name, pic, price} = item;
    return (
        <div className='cart-calc'>
            <h5>{name}</h5>
        </div>
    );
};

export default Cart;