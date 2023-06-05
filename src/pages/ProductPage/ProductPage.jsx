import React from "react";
import { Product } from "../../components/Product/Product";
import { Api } from "../../components/Api/Api";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

export const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    const config = {
        baseUrl: 'https://api.react-learning.ru/'
        };

    const api = new Api(config);

    useEffect(() => {
        if (id) {
        api.getProductById(id) 
        .then(res => setProduct(res)
        )}
        },[id]);

        console.log(Object.keys(product))
        console.log(product, 'b')
        
return (
    <>
        {!!Object.keys(product).length ?
            <Product product={product} id={id}  />
            :
            <div>Loading...</div>}
    </>
)}