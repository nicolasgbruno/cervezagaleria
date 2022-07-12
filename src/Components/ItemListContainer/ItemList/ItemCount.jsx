import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [amount, setAmount] = useState(1)
    const count = (value) => {
        const result = amount + value;
        if (result <= stock && result >= 0)
            setAmount(amount + value)
    }

    return (
        
            <div className='producto'>
                <div className='productoBotones'>
                    <span onClick={() => count(-1)}>-</span>
                    <span>{amount}</span>
                    <span onClick={() => count(+1)}>+</span>
                </div>
                <button disabled={stock <= 0} onClick={() => onAdd(amount)}>Agregar al carrito</button>
            </div>
           
        
    )
}

export default ItemCount