import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import "./CartProduct.css";

const CartProduct = ({product}) => {
  const {removeProduct} = useCartContext();
  return (
    <section className='contenedorCartProduct'>
      <img src={product.img} alt="imagen" />
      <div className='textoCartProduct'>
        <ul><h2>{product.name}</h2></ul>
        <ul><h3>Cantidad: {product.quantity}</h3></ul>
        <ul><h3>Precio: $ {product.price}</h3></ul>
        <ul><h3>Subtotal: $ {product.quantity * product.price}</h3></ul>
        <ul><button onClick={() => removeProduct(product.id)}>X</button></ul>
      </div>
    </section>
  )
}


export default CartProduct