import React from "react";
import { useContext } from "react";
import { CardsContext } from "../../context/Context";
import { FavoritesCardList } from "../../components/FavoritesCards/FavoritesCardList";
import { FavoritesNullItems } from "../../components/FavoritesCards/FavoritesNullItems";
import { SpinerLoading } from "../../components/SpinerLoading/Spiner";

export const FavoritesProductPage = () => {
    
    const {favoritesCards} = useContext(CardsContext)

    return <>
       {!!favoritesCards.length ?
        <FavoritesCardList/> 
        :
        <FavoritesNullItems />}
        </>
}
