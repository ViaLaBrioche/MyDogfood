import React, { useContext } from "react";
import { CardsContext } from "../../context/Context";


export const SearchResult = () => {

    const {cards, searchTerm} = useContext(CardsContext) 
   

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

    return <p className="main_result">По запросу  <b>{searchTerm}</b> {FoundProduct()} {cards.length} {CountProduct()} </p>
}