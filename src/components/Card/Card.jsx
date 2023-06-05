import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { useContext } from "react";
import { UserContext } from "../../context/Context";


export const Card = ({name, likes, price,wight,pictures,_id, discount}) => {

    const {user, toggleLike} = useContext(UserContext)
    const like = likes.includes(user._id)

    function Price(props) {
        console.log()
        const isDiscount = props.disc;
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
                    <button onClick={()=> toggleLike(_id, like) } className="card__favorite__btn"><IconHeart className={like ? "card__favorite_heart_like" : "card__favorite_heart"}/></button>
            </div>
            <Link className="card__link" to={`/product/${_id}`}>
                    <img src={pictures} className='card__image'></img>
                <Price disc={discount} />
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

