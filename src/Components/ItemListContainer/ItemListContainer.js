import React, { useEffect, useState } from 'react'
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import { getData} from '../../mocks/Api';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams();

    useEffect(()=>{
        getData(categoryId)
        .then((res) => {
            setProductList(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    },[categoryId])
    
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