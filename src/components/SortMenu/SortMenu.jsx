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

    const arr = ['Популярные', 'Новинки', 'Сначала дешёвые', "Сначала дорогие", 'По рейтингу', "По скидке"]

 

    return <div className="sort__menu__container">
        {arr.map((e)=> <button name={e} key={e} onClick={()=> sort(e)} className={`sort__menu__btn ${btnTarget === e && 'current'}`}>{e}</button> )}
        </div>
}
