import React from "react";
import { useSelector } from "react-redux";


export const SearchResult = () => {
    const { cards, search } = useSelector((s) => s.products)
    
    
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

    return <p className="main_result">По запросу  <b>{search}</b> {FoundProduct()} {cards.length} {CountProduct()} </p>
}