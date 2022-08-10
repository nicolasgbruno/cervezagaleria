import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import "./Cart.css";
import CartProduct from '../CartProduct/CartProduct';
import FormSales from './FormSales';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [finalizarCompra, setFinalizarCompra] = useState(false);

  const compraFinalizada = () => {
    setFinalizarCompra(true);
  };

  if (cart.length === 0) {
    return (
      <div className='carritoVacio'>
        <h2>El carrito está vacío</h2>
        <Link to="/">Seguir comprando</Link>
        </div>
    )
  }

  return (
    <>
      <div>
        {cart.map(product => <CartProduct key={product.id} product={product} />)}
      </div>
      <div className='total'>
        <h2 className='totalTexto'>Total: $ {totalPrice()}</h2>
      </div>
      <div className='botonFinalizar'>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
      </div>

      {finalizarCompra ? (
        <FormSales/>
      ) : (
        <div className='botonFinalizar'>
          <button onClick={compraFinalizada}>Finalizar compra</button>
        </div>
      )}

    </>

  )
}

export default Cart