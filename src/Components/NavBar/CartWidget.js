import React from 'react'
import ShoppingCart from '../../assets/images/shoppingcart.png'
import './CartWidget.css';
import { Link } from "react-router-dom";
import {useCartContext} from '../../Context/CartContext'

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <div>
            <Link to="/cart">
                <img src={ShoppingCart} alt="Carrito de compras" className='cart' />
                <span>{totalProducts() || ''}</span>
            </Link>
        </div>
    )
}

export default CartWidget