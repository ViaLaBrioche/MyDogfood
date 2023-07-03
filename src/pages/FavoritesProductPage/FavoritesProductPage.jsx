import React from "react";
import { FavoritesCardList } from "../../components/FavoritesCards/FavoritesCardList";
import { FavoritesNullItems } from "../../components/FavoritesCards/FavoritesNullItems";
import { useSelector } from "react-redux";

export const FavoritesProductPage = () => {
    
    const {favoritesCards} = useSelector((s)=> s.products)

    return <>
        {!!favoritesCards.length ?
        <FavoritesCardList/> 
        :
        <FavoritesNullItems />}
        </>
}
