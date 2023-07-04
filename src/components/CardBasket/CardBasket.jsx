import React from "react";  
import { CounterBtn } from "../CounterBtn/CounterBtn";
import {ReactComponent as Trash} from "./Icons/trash.svg";
import './cardBasket.scss'
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../../storageToolkit/slices/productsSlice";
import { Link } from "react-router-dom";
export const CardBasket = ({name, discount, pictures, price, stock, wight, _id, product}) => {
    const dispatch = useDispatch()
    const discountTotal = product.price - (product.price / 100 * product.discount);
    
    return <div className="basket__card__container">
                <div className="card__left">
                        <img src={pictures}/>
                    <div>
                    <Link className="link__name" to={`/product/${_id}`}><p className="name">{name}</p></Link>
                        <p className="wight">{wight}</p>
                    </div>
                </div>
                <div className="card__right">
                    <CounterBtn className="counter" product={product}/>
                    <div className="price">{!!discount ? (discountTotal*product.countItem) : (price*product.countItem)}&nbsp;₽</div>
                    <Trash onClick={()=> dispatch(deleteFromBasket(_id))}/>
                </div>

    </div>
}