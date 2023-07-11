import React from "react";
import { FavoritesCardList } from "../../components/FavoritesCards/FavoritesCardList";
import { FavoritesNullItems } from "../../components/NullItems/NullItems";
import { useSelector } from "react-redux";

export const FavoritesProductPage = () => {
    
    const {favoritesCards} = useSelector((s)=> s.products)

    const favoriteNull = {
        name: "В Избранном пока ничего нет",
        info: "Добавляйте товары в Избранное с помощью ❤️",
        back: "На главную"
    }

    return <>
        {!!favoritesCards.length ?
        <FavoritesCardList/> 
        :
        <FavoritesNullItems whatPage={favoriteNull} />}
        </>
}
