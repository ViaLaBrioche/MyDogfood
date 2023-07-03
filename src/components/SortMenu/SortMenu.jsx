import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from "../../storageToolkit/slices/productsSlice";

export const SortMenu = () => {

    const [btnTarget, setBtnTarget] = useState("")

    const dispatch = useDispatch()

    const sort = (e) => {
        dispatch(sortProducts(e))
        setBtnTarget(e)
    }

    return <div className="sort__menu__container">
        <button name="popular" type="button" onClick={(e)=> sort(e.target.name)} className={`sort__menu__btn ${btnTarget === "popular" && 'current'}`}>Популярные</button>
        <button name="new" type="button" onClick={(e) => sort(e.target.name)}  className={`sort__menu__btn ${btnTarget === "new" && 'current'}`}>Новинки</button>
        <button name="cheap" type="button" onClick={(e) => sort(e.target.name)}  className={`sort__menu__btn ${btnTarget === "cheap" && 'current'}`}>Сначала дешёвые</button>
        <button name="expensive" type="button" onClick={(e) => sort(e.target.name)} className={`sort__menu__btn ${btnTarget === "expensive" && 'current'}`}>Сначала дорогие</button>
        <button name="rating" type="button" onClick={(e) => sort(e.target.name )}  className={`sort__menu__btn ${btnTarget === "rating" && 'current'}`}>По рейтингу</button>
        <button name="discount" type="button" onClick={(e) => sort(e.target.name)}  className={`sort__menu__btn ${btnTarget === "discount" && 'current'}`}>По скидке</button>
    </div>
}
