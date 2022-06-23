import React from 'react'
import ShoppingCart from '../../assets/images/shoppingcart.png'
import './CartWidget.css';

const cartWidget = () => {
    return (
        <div>
            <a href="#/">
                <img src={ShoppingCart} alt="Carrito de compras" className='cart' />
            </a>
        </div>
    )
}

export default cartWidget