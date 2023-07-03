import React from "react";
import { CardList } from "../CardList/CardList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const FavoritesCardList = () => {

    const {favoritesCards} = useSelector((s)=> s.products)
    
    return  <div className="favorite__page__container">
        <Link to="/my_dogfood">
            <button className="btn__back" type="button">Назад</button></Link>
        <h1>Избранное</h1> 
        <CardList cards={favoritesCards}/>
    </div>
}