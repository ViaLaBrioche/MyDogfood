import React from "react";
import "./product.scss"
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'
import { ReactComponent as IconQuality } from './Icons/quality.svg'
import { Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react"
import { UserContext } from "../../context/Context";
import { ReviewsList } from "../Reviews/ReviewsList/ReviewsList";
import { ReviewForm } from "../Reviews/ReviewForm";
import { RatingProduct } from "../Rating/RatingProduct";
import { CounterBtn } from "../CounterBtn/CounterBtn";


export const Product = ({product, id}) => {
    
    const {user, toggleLike, addToBasket} = useContext(UserContext)
    const [counter, setCounter] = useState(0)
    const [like, setLike] = useState(false);
    const [total, setTotal] = useState(0)
    const discountTotal = product.price - (product.price / 100 * product.discount);

    const totalPrice = () => {
        const total = counter > 0 ? (discountTotal)*counter : discountTotal
        setTotal(total)
    } 
    
    useEffect(()=> {
        totalPrice(product)
    },[counter])


    useEffect(() => {
        const isLike = product.likes.includes(user._id)
        setLike(isLike)
    }, [product, user]);


    return <div>
        <Link to="/my_dogfood"><button className="product__btn__back" type="button">Назад</button></Link>
    <div className='product__container_name_rate'>
        <h1>{product.name}</h1>
        <span className="product__articul">Арстикул: 12345</span>
        <RatingProduct />
    </div>
        <div className="product__container_img_active">
            <img className="product__image" alt='images' src={product.pictures}/>
            <div className="product__container__active">
                <div>
                    {!!product.discount && <div className="product__old__price">{counter > 0 ? product.price*counter : product.price}&nbsp;₽</div>}
                    <div className={`product__price ${!!product.discount && 'price__discount'}`}><b>{total}&nbsp;₽</b></div>
                </div>
                <div className="product__container__btns">
                <CounterBtn product={product} counter={counter} setCounter={setCounter}/>
                    <button className="product__busket__btn" onClick={()=>{addToBasket(id)}}>В корзину</button>
                </div>
            <div className="product__favorite__container"  onClick={()=>{toggleLike(id, like)}}>
                <IconHeart className={like ? "product__favorite__icon_like" : "product__favorite__icon"}/>
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
            <div className="product__down__container">
                <div>
                    <h2>Описание</h2>
                    <p>{product.description}</p>
                </div>
                <h2>Характеристики</h2>
                <div className="product__specifications">
                    <div>
                        <p>Вес</p>
                        <p>Цена</p>
                        <p>Польза</p>
                    </div>
                    <div>
                        <p>{product.wight}</p>
                        <p>{product.discount ? discountTotal : product.price}&nbsp;₽</p>                       
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quasi commodi nemo saepe maiores iste pariatur sint sapiente dolor eligendi, placeat ratione consequuntur! Rerum vel praesentium nesciunt a, corrupti adipisci!</p>
                    </div>
                </div>
                <ReviewForm idProduct={id}/>
                <ReviewsList idProduct={id}/>
            </div>
        </div>
        
}