import React from 'react';
import { useCartContext } from '../../Context/CartContext';

const Cart = ({product}) => {
  const {removeProduct} = useCartContext();
  return (
    <section className='contenedorItemDetail'>
      <img className='itemImg' src={product.img} alt="imagen" />
      <div className='textoItemDetail'>
        <h2>{product.name}</h2>
        <h3>Cantidad: {product.quantity}</h3>
        <h3>Precio: $ {product.price}</h3>
        <h3>Subtotal: $ {product.quantity * product.price}</h3>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </section>
  )
}


export default Cart

// const Cart = ({product}) => {
//   const {name, price, img} = product;
//   return (
//     <section className='contenedorItemDetail'>
//             <img className='itemImg' src={img} alt="imagen" />
//             <div className='textoItemDetail'>
//                 <h2>{name}</h2>
//                 <h3>Precio: $ {price}</h3>

//             </div>
            
//         </section>
//   )
// }