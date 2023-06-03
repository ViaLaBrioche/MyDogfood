import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export const FavoriteProductPage = ({favoriteCards}) => {


    return <div className="favorite__page__container">
        <Link className="favorite__btn__link" to="/my_dogfood">
            <button className="favorite__btn__back" type="button">Назад</button></Link>
        <h1>Избранное</h1> 
        <CardList cards={favoriteCards}/>
    </div>
}


// const filterFavorite = (cards) => {
//     const newCardsFav = cards.filter(({likes})=> likes.includes(userId))