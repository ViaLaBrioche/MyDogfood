import React, {useState} from "react";  
import { CounterBtn } from "../CounterBtn/CounterBtn";
import {ReactComponent as Trash} from "./Icons/trash.svg";
import './cardBasket.scss'
export const CardBasket = ({name, discount, pictures, price, stock, wight, _id, product}) => {

    const [counter, setCounter] = useState(1)
    const discountTotal = product.price - (product.price / 100 * product.discount);
    
    return <div className="basket__card__container">
                <div className="card__left">
                        <img src={pictures}/>
                    <div>
                        <p className="name">{name}</p>
                        <p className="wight">{wight}</p>
                    </div>
                </div>
                <div className="card__right">
                    <CounterBtn className="counter" counter={counter} setCounter={setCounter} product={product}/>
                    <div className="price">{!!discount ? (discountTotal*counter) : (price*counter)}&nbsp;₽</div>
                    <Trash/>
                </div>

    </div>
}