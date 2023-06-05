import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardsContext } from "../../context/Context";
import { ReactComponent as IconSmile} from "./Icons/smile.svg"


export const FavoritesProductPage = () => {
    
    const {favoritesCards} = useContext(CardsContext)

    
    return !!favoritesCards.length ?
    <div className="favorite__page__container">
        <Link className="favorite__btn__link" to="/my_dogfood">
            <button className="favorite__btn__back" type="button">Назад</button></Link>
        <h1>Избранное</h1> 
        <CardList cards={favoritesCards}/>
    </div>
    :
    <div className="favorites__null__items__container">
        <IconSmile/>
        <h1>В Избранном пока ничего нет</h1>
        <p>Добавляйте товары в Избранное с помощью ❤️️</p>
        <Link to="/my_dogfood"><button type="button" >На главную</button></Link>
    </div>

}
