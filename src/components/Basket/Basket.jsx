import React from "react";
import { useSelector } from "react-redux";
import { BasketCardsList } from "./BasketCardsList";
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'

export const Basket = () => {

    const {basketCards} = useSelector((s)=> s.products)

    const allProductPrice = basketCards.reduce((accum, i) =>
    accum + i.countItem * i.price, 0)

    const allProductDiscount = basketCards.reduce((accum, i) =>
    accum + i.countItem * (i.price * i.discount / 100), 0)

    const totalPrice = allProductPrice - allProductDiscount


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
                                <p>{allProductPrice}</p>
                            </div>
                            <div className="discount">
                                <p >Скидка</p>
                                <p>{allProductDiscount}</p>                            
                            </div>
                            <div className="total__price">
                                <p >Общая стоимость</p>
                                <p>{totalPrice}</p>
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