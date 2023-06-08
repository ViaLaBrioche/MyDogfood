import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as IconSmile} from "./Icons/smile.svg"


export const FavoritesNullItems = () => {

    return  <div className="favorites__null__items__container">
        <IconSmile/>
        <h1>В Избранном пока ничего нет</h1>
        <p>Добавляйте товары в Избранное с помощью ❤️️</p>
        <Link to="/my_dogfood"><button type="button" >На главную</button></Link>
    </div>} 