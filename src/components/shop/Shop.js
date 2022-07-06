import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Chair from '../chair/Chair';
import './Shop.css'

const Shop = () => {
    const [chairs, setChairs] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setChairs(data))
    }, [])

    const addToCart = (chair) => {
        const newCart = [...cart, chair]
        setCart(newCart)
    }

    const SelectBtn = () => {
        const clearAll = []
        setCart(clearAll)
    }

    const RandomSelectBtn = () => {
        const random = cart[Math.floor((Math.random()*cart.length))];
        const newSelected = [random]
        setCart(newSelected);
    }

    // Array.prototype.random = function () {
    //     return this[Math.floor((Math.random()*this.length))];
    //   }

    return (
        <div>
            <div className="container shop-container">
                <div className="chair-container col-sm-12">
                {
                    chairs.map(chair => <Chair
                    key={chair.id}
                    chair={chair}
                    addToCart={addToCart}
                    ></Chair>)
                }
                </div>
                <div className="cart-container">
                    {
                        cart.map(item => <Cart
                        key={item.id}
                        item={item}
                        >
                        </Cart>) 
                    }
                    <div className='random-btn'>
                        <button onClick={RandomSelectBtn}>Random Generator</button>
                        <button onClick={SelectBtn}>Select Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;