import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardsContext } from "../../context/Context";


export const FavoritesProductPage = () => {
    
    const {favoritesCards} = useContext(CardsContext)

    
    return <div className="favorite__page__container">
        <Link className="favorite__btn__link" to="/my_dogfood">
            <button className="favorite__btn__back" type="button">Назад</button></Link>
        <h1>Избранное</h1> 
        <CardList cards={favoritesCards}/>
    </div>
}
