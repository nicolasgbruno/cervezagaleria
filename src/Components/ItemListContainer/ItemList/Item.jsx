import React from 'react'
import './Item.css'

const Item = ({product}) => {
    const {name, precio, img} = product;
  return (
    <div>
        <section className="contenedorProducto">
            <div className='producto'>
                <h3>{name}</h3>
                <img src={img} alt="{product.name}" />
                <h4>Precio: $ {precio}</h4>
                <button>Ver detalles</button>
            </div>
        </section>
    </div>
  )
}

export default Item