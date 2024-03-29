import React, { useEffect, useState } from 'react'
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])


    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        if (categoryId){const q = query(productsCollection, where('category', '==', categoryId))
        getDocs(q)
        .then(result => {
            const listaQuery = result.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(listaQuery);
        })} else {
            getDocs(productsCollection)
        .then(result => {
            const lista = result.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(lista);
        })
        .catch((error) => {
                console.log(error);
            })
        }
            
    }, [categoryId])

    return (
        <>
        <ItemList productList={productList} />
            

        </>

    )
}

export default ItemListContainer;