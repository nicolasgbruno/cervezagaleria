import React, { useEffect, useState } from 'react'
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import { getData } from '../../mocks/Api';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const respuesta = await getData;
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
            <h2>Cargando productos</h2>
            <img src="./img/loading.gif" alt="" />
        </div>  : 
            
            <ItemList productList={productList} /> }
        </>

    )
}

export default ItemListContainer;