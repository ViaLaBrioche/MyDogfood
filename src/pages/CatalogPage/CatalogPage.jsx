import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { SortMenu } from "../../components/SortMenu/SortMenu";
import { useContext } from "react";
import { CardsContext } from "../../context/Context";

export const CatalogPage = ({setCards}) => {

    const {cards, searchTerm} = useContext(CardsContext)

    return <div><SortMenu setCards={setCards}/>
    <div>{!!searchTerm && <SearchResult />}</div>
    <CardList cards={cards}/>
    </div>
}