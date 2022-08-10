import React, { useState } from 'react'
import { db } from '../../firebase/firebase';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormSales = () => {
  
  let navigate = useNavigate();

  const [idVenta, setIdVenta] = useState('');

  const handleClick = (e) => {
    e.preventDefault()
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      user,
      items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
      date: serverTimestamp(),
      total: totalPrice()
    })
      .then((result) => {
        setIdVenta(result.id)
      })
  }

  const { cart, totalPrice, clearCart } = useCartContext();
  const valorInicial = {
    name: '',
    mail: '',
    adress: ''
  }

  const [user, setUser] = useState(valorInicial)

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const buySend = () => {
    Swal.fire({
      icon: "success",
      title: "Confirmación",
      html: `<p>Gracias por tu compra, tu código de pedido es:<p>${idVenta}`,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        return navigate("/");
      }
    });
  };

  return (
    <div>
      {!idVenta
        ?
        <form onSubmit={handleClick}>
          <input className='field' type="text" name="name" placeholder='Nombre completo' onChange={capturarInputs} value={user.name} requiered />
          <input className='field' type="email" name="mail" placeholder='Correo electrónico' onChange={capturarInputs} value={user.mail} requiered />
          <input className='field' type="text" name="adress" placeholder='Dirección' onChange={capturarInputs} value={user.adress} requiered />
          <div className='botonFinalizar'>
            <button>Enviar compra</button>
          </div>
        </form>
        :
        buySend()
      }
    </div>
  )
}

export default FormSales