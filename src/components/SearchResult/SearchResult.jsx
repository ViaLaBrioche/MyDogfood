import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export const SearchResult = () => {
    const { cards, search } = useSelector((s) => s.products)
    const [item, setItem] = useState('')
    const [found, setFound] = useState('')

    const CountProduct = () => {
        if (cards.length === 1) {
            return "товар"
        } else if (cards.length > 1 && cards.length < 5) {
            return "товара"
        } else if (cards.length > 1 || cards.length === 0) {
            return "товаров"
        } 
        
    };
    
    const FoundProduct = () => {
        if (cards.length === 1) {
            return "найден"
        } else {
            return "найдено"      
        }
    };

    useEffect(()=> {
        setItem(CountProduct())
        setFound(FoundProduct())
    },[])


    return <p className="main_result">По запросу  <b>{search}</b> {found} {cards.length} {item} </p>
}