import React, { useCallback, useState } from "react";
import { Product } from "../../components/Product/Product";
import { Api } from "../../components/Api/Api";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { SpinerLoading } from "../../components/SpinerLoading/Spiner";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../storageToolkit/slices/productsSlice";

export const ProductPage = () => {
    const {user} = useSelector((s)=> s.user)
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    const dispatch = useDispatch()
    const config = {
        baseUrl: 'https://api.react-learning.ru/'
    };
    
    const api = new Api(config);

    useEffect(() => {{
            api.getProductById(id)
                .then(res => setProduct(res)
            )
        }
    }, [id]);

    const toggleLikeProduct = useCallback((product, like) => {
        dispatch(toggleLike({ product, like }))
        if (like) {
            const filteredLikes = product.likes.filter(e => e !== user?._id);
            setProduct((s) => ({ ...s, likes: filteredLikes }))
        } else {
            const addLikes = [...product.likes, user?._id];
            setProduct((state) => ({ ...state, likes: addLikes }))
        }
    }, [dispatch, user?._id])

    return (
        <> 
            {!!Object.keys(product).length ?
                <Product product={product} toggleLikeProduct={toggleLikeProduct} id={id}  />
                : <SpinerLoading />
            }
        </>
    )
}