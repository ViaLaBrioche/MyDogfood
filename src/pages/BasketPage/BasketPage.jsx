import React from "react";
import { useSelector } from "react-redux";
import { Basket } from "../../components/Basket/Basket";
import { FavoritesNullItems } from "../../components/NullItems/NullItems";

export const BasketPage = () => {
    const {basketCards} = useSelector((s) => s.products)
    const basketeNull = {
        name: "В корзине нет товаров",
        info: "Добавьте товар, нажав кнопку «В корзину» в карточке товара",
        back: "За покупками"
    }
        

    return <>{!!basketCards.length ?
        <Basket/> 
        :
        <FavoritesNullItems whatPage={basketeNull}/>}</>
}