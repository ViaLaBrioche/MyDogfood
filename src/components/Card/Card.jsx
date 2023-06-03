import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { Api } from "../Api/Api";
import { useContext } from "react";
import { UserContext } from "../../context/Context";


export const Card = ({name, likes, product, price,wight,pictures,_id, discount}) => {
    const user = useContext(UserContext)
    const config = {
        baseUrl: 'https://api.react-learning.ru/'
        };
    const api = new Api(config);

    const isLiked = likes.some((e)=> e === user._id)

    
    function Price(discount) {
        const isDiscount = discount.discount;
        if (!!isDiscount) {
            return <div><div className="item__price__discount" >{price}&nbsp;₽</div>
            <div className="item__price item__price_red">{price-(price / 100 * isDiscount)}&nbsp;₽</div></div>
        } else {
        return <div className="item__price">{price}&nbsp;₽</div>
    }
}
    return (
        <div className="card" >
            <div className="card__container__sticky">
            {!!discount && <div className="card__discount"> 
                        <span className='card__discount'>-{discount}%</span>
                    </div>}
                    <button className="card__favorite__btn"><IconHeart className={isLiked ? "card__favorite_heart_like" : "card__favorite_heart"}/></button>
            </div>
            <Link className="card__link" to={`/product/${_id}`}>
                    <img src={pictures} alt="description of image" className='card__image'></img>
                <Price discount={discount}/>
                <div className="item__info">
                    <span className="item__wight">{wight}</span>
                    <span className="item__name">{name}</span>
                </div>
            </Link>
            <div className="card__container__btn">
            <button id={_id}  className="card__btn" type="button">В корзину</button>
        </div>
    </div>
    )
} 

