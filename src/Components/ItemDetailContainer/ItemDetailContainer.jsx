import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getProduct} from '../../mocks/Api';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(true)


    const {id} = useParams();

    useEffect(()=>{
        getProduct(id)
        .then((res) => {
            setProductList(res);
        })
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