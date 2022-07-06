import React from 'react';
import './Chair.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Chair = (props) => {
    const {pic, name, price} = props.chair;
    return (
        <div>
            <div className="row row-cols-1 g-4">
                <div className="col col-sm-12">
                    <div className="card">
                        <img src={pic} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: ${price}</p>
                        <button className='btn'>
                            <p onClick={() => props.addToCart(props.chair)} className='btn-txt'>Add to Cart</p>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                    </div>
                    </div>
                </div>
            </div>    
            
            {/* Q & A part here*/}
        </div>
    );
};

export default Chair;