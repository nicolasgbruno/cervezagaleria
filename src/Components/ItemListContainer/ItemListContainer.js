import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='bienvenida'>
            <span className='bienvenidaSpan'>{greeting}</span>
        </div>
    )
}

export default ItemListContainer;