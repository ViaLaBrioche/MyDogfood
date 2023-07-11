import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as IconSmile} from "./Icons/smile.svg"


export const FavoritesNullItems = ({whatPage}) => {
    return  <div className="favorites__null__items__container">
        <IconSmile/>
        <h1>{whatPage.name}</h1>
        <p>{whatPage.info}</p>
        <Link to="/my_dogfood"><button type="button" >{whatPage.back}</button></Link>
    </div>} 