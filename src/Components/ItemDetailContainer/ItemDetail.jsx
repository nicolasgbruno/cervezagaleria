import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({productList}) => {
    console.log(productList)
    const {name, precio, img, detail, amargor, alcohol, srm} = productList;
    return (
        <section className='contenedorItemDetail'>
            
            <img className='itemImg' src={img} alt="West IPA" />
            <div className='textoItemDetail'>
                <h2>{name}</h2>
                <h3>Precio: $ {precio}</h3>
                <p>{detail}</p>
                <p>Amargor: {amargor}</p>
                <p>Alcohol: {alcohol}</p>
                <p>SRM: {srm}</p>
            </div>
        </section>
    )
}

export default ItemDetail