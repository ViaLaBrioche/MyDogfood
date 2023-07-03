import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { SortMenu } from "../../components/SortMenu/SortMenu";
import { useContext } from "react";
import { CardsContext } from "../../context/Context";
import { useSelector } from "react-redux";

export const CatalogPage = () => {

    const {searchTerm} = useContext(CardsContext)
    const { cards } = useSelector((s)=> s.products)
    
    return <div><SortMenu />
    <div>{!!searchTerm && <SearchResult />}</div>
    <CardList cards={cards}/>
    </div>
}