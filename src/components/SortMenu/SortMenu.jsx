import React, { useEffect } from 'react';
import { useState } from 'react';

export const SortMenu = ({cards, setCards}) => {
    const [btnTarget, setBtnTarget] = useState(null)

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
        <button name="popular" type="button" onClick={(e)=> SortPopular(e.target.name, cards) } className={btnTarget === "popular" ? 'sort__menu__btn current' : 'sort__menu__btn'}>Популярные</button>
        <button name="new" type="button" onClick={(e) => SortNew(e.target.name, cards)}  className={btnTarget === "new" ? 'sort__menu__btn current' : 'sort__menu__btn'}>Новинки</button>
        <button name="cheap" type="button" onClick={(e) => SortCheap(e.target.name, cards)}  className={btnTarget === "cheap" ? 'sort__menu__btn current' : 'sort__menu__btn'}>Сначала дешёвые</button>
        <button name="expensive" type="button" onClick={(e) => SortExpensive(e.target.name, cards)} className={btnTarget === "expensive" ? 'sort__menu__btn current' : 'sort__menu__btn'}>Сначала дорогие</button>
        <button name="rate" type="button" onClick={(e) => SortRate(e.target.name, cards)}  className={btnTarget === "rate" ? 'sort__menu__btn current' : 'sort__menu__btn'}>По рейтингу</button>
        <button name="discount" type="button" onClick={(e) => SortDiscount(e.target.name, cards)}  className={btnTarget === "discount" ? 'sort__menu__btn current' : 'sort__menu__btn'}>По скидке</button>
    </div>
}
