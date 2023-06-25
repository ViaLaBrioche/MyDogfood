import React from "react";
import { Link } from "react-router-dom";
import { BasketCardsList } from "./BasketCardsList";
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'

export const Basket = () => {
    return <div>
        <h1> В корзине </h1>
        <div className="basket__up">
            <BasketCardsList/>
            <div className="rigth__container">
                <div className="basket__right">
                        <h2>Ваша корзина</h2>
                        <div className="basket__total">
                            <div className="items">
                                <p>Товары</p>
                                <p>price</p>
                            </div>
                            <div className="discount">
                                <p >Скидка</p>
                                <p>discount</p>                            
                            </div>
                            <div className="total__price">
                                <p >Общая стоимость</p>
                                <p>TotalPrice</p>
                            </div>   
                        </div>
                        <button>Оформить заказ</button>
                </div> 
                <div className="basket__delivery">
                    <div className="basket__delivery__logo">
                        <IconDelivery/>
                    </div>
                    <div className="basket__info basket__info_text">
                        <p><b>Доставка по всему Миру!</b></p>
                        <p>Доставка курьером — от 399&nbsp;₽</p>
                        <p>Доставка в пункт выдачи — от 199&nbsp;₽</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}