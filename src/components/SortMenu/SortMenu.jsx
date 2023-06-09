import React, { useContext } from 'react';
import { useState } from 'react';
import { CardsContext } from '../../context/Context';

export const SortMenu = ({setCards}) => {

    const {cards} = useContext(CardsContext)
    const [btnTarget, setBtnTarget] = useState("")


    const productRate = (reviews) => {
        if (!reviews || !reviews.length) {
            return 0;
        }
        const res = reviews.reduce((acc, el) => acc += el.rating, 0);
        return res / reviews.length
    }

    
    const SortExpensive = (e, cards) => {
        const newCards = cards.sort((a, b) => b.price - a.price);
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    const SortPopular= (e, cards) => {
        const newCards = cards.sort((a, b) => b.likes.length - a.likes.length);
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    const SortCheap = (e, cards) => {
        const newCards = cards.sort((a, b) => a.price - b.price);
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    const SortNew = (e, cards) => {
        const newCards = cards.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    const SortRate = (e, cards) => {
        const newCards = cards.sort((a, b) => productRate(b.reviews) - productRate(a.reviews))
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    const SortDiscount = (e, cards) => {
        const newCards = cards.sort((a, b) =>  b.discount - a.discount);
        setCards([...newCards]);
        setBtnTarget(e)
        return
    }

    return <div className="sort__menu__container">
        <button name="popular" type="button" onClick={(e)=> SortPopular(e.target.name, cards) } className={`sort__menu__btn ${btnTarget === "popular" && 'current'}`}>Популярные</button>
        <button name="new" type="button" onClick={(e) => SortNew(e.target.name, cards)}  className={`sort__menu__btn ${btnTarget === "new" && 'current'}`}>Новинки</button>
        <button name="cheap" type="button" onClick={(e) => SortCheap(e.target.name, cards)}  className={`sort__menu__btn ${btnTarget === "cheap" && 'current'}`}>Сначала дешёвые</button>
        <button name="expensive" type="button" onClick={(e) => SortExpensive(e.target.name, cards)} className={`sort__menu__btn ${btnTarget === "expensive" && 'current'}`}>Сначала дорогие</button>
        <button name="rate" type="button" onClick={(e) => SortRate(e.target.name, cards)}  className={`sort__menu__btn ${btnTarget === "rate" && 'current'}`}>По рейтингу</button>
        <button name="discount" type="button" onClick={(e) => SortDiscount(e.target.name, cards)}  className={`sort__menu__btn ${btnTarget === "discount" && 'current'}`}>По скидке</button>
    </div>
}
