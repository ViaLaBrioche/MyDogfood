import React, { useContext } from "react";
import { Product } from "../../components/Product/Product";
import { Api } from "../../components/Api/Api";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { CardsContext } from "../../context/Context";
import { SpinerLoading } from "../../components/SpinerLoading/Spiner";

export const ProductPage = () => {
    const cards = useContext(CardsContext)
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const config = {
        baseUrl: 'https://api.react-learning.ru/'
    };

    const api = new Api(config);

    useEffect(() => {{
            api.getProductById(id)
                .then(res => setProduct(res)
                )
        }
    }, [cards]);

    return (
        <> 
            {!!Object.keys(product).length ?
                <Product product={product} id={id} />
                : <SpinerLoading />
            }
        </>
    )
}