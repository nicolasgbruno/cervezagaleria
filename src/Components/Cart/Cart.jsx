import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.lenght === 0) {
    return (
      <>
      <h2>El carrito está vacío</h2>
      <Link to="./">Seguir comprando</Link>
      </>
    )
  }

  return (
    <> 
    {cart.map(product => <ItemCart key={product.id} product={product}/>)}
    <h2>Total: $ {totalPrice()}</h2>
    </>
    
  )
}

export default Cart