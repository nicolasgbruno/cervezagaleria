import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, name, imagen, precio}) => {
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value;
        if(result<=stock && result>=0)
        setAmount(amount+value)
    }

    return (
        <section>
            <div className='producto'>
                <h3>{name}</h3>
                <h4>Stock: {stock}</h4>
                <img src={imagen} alt="" />
                <h4>Precio: $ {precio}</h4>
                <div className='productoBotones'>
                    <span onClick={()=>count(-1)}>-</span>
                    <span>{amount}</span>
                    <span onClick={()=>count(+1)}>+</span>
                </div>
                <button>Agregar al carrito</button>
                
            </div>
        </section>
    )
}

export default ItemCount