import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BasketCardsList } from "./BasketCardsList";
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'

export const Basket = () => {
    const [item, setItem] = useState('')
    const {basketCards} = useSelector((s)=> s.products)

    const allProductPrice = basketCards.reduce((accum, i) =>
    accum + i.countItem * i.price, 0)

    const allProductDiscount = basketCards.reduce((accum, i) =>
    accum + i.countItem * (i.price * i.discount / 100), 0)

    const totalPrice = allProductPrice - allProductDiscount

    const CountProduct = () => {
        if (basketCards.length === 1) {
            return "товар"
        } else if (basketCards.length > 1 && basketCards.length < 5) {
            return "товара"
        } else if (basketCards.length > 1 || basketCards.length === 0) {
            return "товаров"
        } 
    };
    useEffect(() => {
        setItem(CountProduct())       
    },[])

    return <div>
        <h1> В корзине { basketCards.length} {item} </h1>
        <div className="basket__up">
            <BasketCardsList/>
            <div className="rigth__container">
                <div className="basket__right">
                        <h2>Ваша корзина</h2>
                        <div className="basket__total">
                            <div className="items">
                                <p>Товары</p>
                                <p>{allProductPrice}&nbsp;₽</p>
                            </div>
                            <div className="discount">
                                <p >Скидка</p>
                                <p>{allProductDiscount}&nbsp;₽</p>                            
                            </div>
                            <div className="total__price">
                                <p >Общая стоимость</p>
                                <p>{totalPrice}&nbsp;₽</p>
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