import React from "react";
import "./product.scss"
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDelivery } from './Icons/delivery.svg'
import { ReactComponent as IconQuality } from './Icons/quality.svg'
import { Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react"
import { UserContext } from "../../context/Context";
import { useForm } from "react-hook-form";
import { ReviewsList } from "./ReviewsList/ReviewsList";
import { StarRating } from "../Rating/StarRating";



export const Product = ({product, id}) => {

    const discount = product.price / 100 * product.discount;
    const {user, toggleLike, setOpenTextarea, openTextarea, addReviewsSubmit, updateReviews} = useContext(UserContext)
    const [counter, setCounter] = useState(0);
    const [like, setLike] = useState(false);
  

    const {register, handleSubmit} = useForm({
        defaultValues: {
        id: `${id}`,
        'text': '',
    }
})
    useEffect(()=> {
        return  updateReviews(id)
    }, [])

    useEffect(() => {
        const isLike = product.likes.includes(user._id)
        setLike(isLike)
    }, [product, user]);

    const addAlert = () => {
        if (counter === 0 ) {
        alert('Товар успешно добавлен в корзину')
    }};

    const productAddAlert = () => {
        setCounter(counter + 1)
        addAlert();
        return
    }

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
                    <div className="product__specifications__left">
                        <p>Вес</p>
                        <p>Цена</p>
                        <p>Польза</p>
                    </div>
                    <div className="product__specifications__right">
                        <p>{product.wight}</p>
                        <p>{product.price}</p>                       
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quasi commodi nemo saepe maiores iste pariatur sint sapiente dolor eligendi, placeat ratione consequuntur! Rerum vel praesentium nesciunt a, corrupti adipisci!</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(addReviewsSubmit)}>
                        <h2>Отзывы</h2>
                        <div>{openTextarea ? <div className="product__reviews__text">
                            <StarRating register={register}/>
                            <textarea name="" id="" {...register("text")} cols="70" rows="15"></textarea>
                            <button type="submit" onClick={()=> updateReviews(id)}>Отправить</button>
                        </div>
                        :
                        <button className="write__review__btn" onClick={()=> setOpenTextarea(true)}>Написать отзыв</button>
                        }
                        </div>
                    </form>
                </div>
                <div></div>
                <ReviewsList idProduct={id}/>
            </div>
        </div>
        
}