import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart'
import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: 'Nicolas',
      email: 'nico@gmail.com',
      phone: '4652-6598',
      adress: 'Calle Falsa 123'
    },
    items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    date: serverTimestamp(),
    total: totalPrice()
  }

  const handleClick = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, order)
    .then(({id}) => console.log(id))
  }

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
    <button onClick={handleClick}>Confirmar compra</button>
    </>
    
  )
}

export default Cart