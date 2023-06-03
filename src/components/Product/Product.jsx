import React from "react";
import "./product.css"
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'
import { ReactComponent as IconQuality } from './Icons/quality.svg'
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Api } from "../Api/Api";
import { UserContext } from "../../context/Context";


export const Product = ({product, id}) => {
    const user = useContext(UserContext)
    const config = {
        baseUrl: 'https://api.react-learning.ru/'
        };
    const api = new Api(config);
    const [counter, setCounter] = useState(0);

    const addAlert = () => {
        if (counter === 0 ) {
        alert('Товар успешно добавлен в корзину')
    }};

    const productAddAlert = () => {
        setCounter(counter + 1)
        addAlert();
        return
    }

    const toggleLike = (id, isLiked) => api.toggleLike(id, isLiked)
    .then(res => {
        console.log(res, 'togglelike', isLiked)
        return

});

const discount = product.price / 100 * product.discount

    return <div>
        <Link to="/my_dogfood"><button className="product__btn__back" type="button">Назад</button></Link>
    <div className='product__container_name_rate'>
        <h1>{product.name}</h1>
        <span className="product__articul">Арстикул: 12345</span>
    </div>
        <div className="product__container_img_active">
            <img className="product__image" alt='images' src={product.pictures}/>
            <div className="product__container__active">
                <div className="product__price"><b>{counter > 0 ? (product.price-discount)*counter : product.price-discount}&nbsp;₽</b></div>
                <div className="product__container__btns">
                <div id="counter">
                    <input type="button"  className="button__count__minus counter__btns" value="-" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}/>
                    <div id="buttonCountNumber"><b>{counter}</b></div>
                    <input type="button" className="button__count__plus counter__btns" value="+" onClick={() => productAddAlert()}/>
                </div>
                    <button className="product__busket__btn">В корзину</button>
                </div>
            <div className="product__favorite__container"  onClick={()=>{toggleLike(id, product.likes.includes(user._id))}}>
                <IconHeart className={`"product__favorite__icon" ${product.likes ? "product__favorite__icon_like" : ""}`}/>
                <button className="product__favorite__btn">В избранное</button>
            </div>
            <div className="product__info__container">
                <div className="product__delivery">
                    <div className="product__delivery__logo">
                        <IconDelivery/>
                    </div>
                    <div className="product__info product__info_text">
                        <p><b>Доставка по всему Миру!</b></p>
                        <p>Доставка курьером — от 399 ₽</p>
                        <p>Доставка в пункт выдачи — от 199 ₽</p>
                    </div>
                </div>
                <div className="product__quality" >
                    <div className="product__quality__logo">
                        <IconQuality/>
                    </div>
                    <div className="product__info">
                        <p><b>Гарантия качества</b></p>
                        <p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        
}