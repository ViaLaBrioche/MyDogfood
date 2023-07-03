import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { SortMenu } from "../../components/SortMenu/SortMenu";
import { useSelector } from "react-redux";

export const CatalogPage = () => {


    const { cards, search } = useSelector((s)=> s.products)
    
    return <div><SortMenu />
    <div>{!!search && <SearchResult />}</div>
    <CardList cards={cards}/>
    </div>
}