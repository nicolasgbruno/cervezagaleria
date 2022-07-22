import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(true)


    const {id} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setProductList({id: res.id, ...res.data()}))

        .catch((error) => {
        console.log(error);
        })
        .finally(() => {
        setLoading(false)
        })
    },[id])
    
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

export default ItemDetailContainer;