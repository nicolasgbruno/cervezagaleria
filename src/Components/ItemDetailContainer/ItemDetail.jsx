import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemListContainer/ItemList/ItemCount';
import {Link} from "react-router-dom"

const ItemDetail = ({productList}) => {
    const {name, precio, img, detail, amargor, alcohol, srm, stock} = productList;
    
    const [goCart, setGoCart] = useState(false)
    
    const onAdd = (quantity) => {
        setGoCart(true);
    }

    return (
        <section className='contenedorItemDetail'>
            
            <img className='itemImg' src={img} alt="imagen" />
            <div className='textoItemDetail'>
                <h2>{name}</h2>
                <h3>Precio: $ {precio}</h3>
                <p>{detail}</p>
                <p>Amargor: {amargor}</p>
                <p>Alcohol: {alcohol}</p>
                <p>SRM: {srm}</p>
                {
                    goCart
                    ? <Link to="/cart"><h2>Finalizar compra</h2></Link>
                    : <ItemCount stock={stock} onAdd={onAdd}/>
                }
                
            </div>
            
        </section>
    )
}

export default ItemDetail