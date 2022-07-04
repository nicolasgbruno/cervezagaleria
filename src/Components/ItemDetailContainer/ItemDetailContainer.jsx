import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getProduct } from '../../mocks/Api';

const ItemListContainer = () => {
    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const respuesta = await getProduct;
            setProductList(respuesta)
        }
        catch(error) {
            alert("Error")
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])
    
    return (

        <>
            {loading ? 
            <div className='loading'>
            <h2>Cargando detalle del producto</h2>
            <img src="./img/loading.gif" alt="" />
        </div>  : 
            
            <ItemDetail productList={productList}/> }
        </>

    )
}

export default ItemListContainer;