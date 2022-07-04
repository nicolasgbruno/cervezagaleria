import React from 'react'
import Item from './Item'

const ItemList = ({ productList }) => {
    
    return (
        <section>
            <div className="contenedorProducto">
                {productList.map((product) => <Item key={product.id} product={product} />)}
            </div> 
        </section>
    )
}

export default ItemList