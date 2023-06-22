import React from "react";
import { Link } from "react-router-dom";
import { BasketCardsList } from "./BasketCardsList";


export const Basket = () => {
    return <div>
        <Link to="/my_dogfood">
            <button className="btn__back" type="button">Назад</button></Link>
        <h1>Корзина</h1>
        <BasketCardsList/>
    </div>
}