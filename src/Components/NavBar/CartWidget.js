import React from 'react'
import ShoppingCart from '../../assets/images/shoppingcart.png'
import './CartWidget.css';
import { Link } from "react-router-dom";

const cartWidget = () => {
    return (
        <div>
            <Link to="/cart">
                <img src={ShoppingCart} alt="Carrito de compras" className='cart' />
            </Link>
        </div>
    )
}

export default cartWidget