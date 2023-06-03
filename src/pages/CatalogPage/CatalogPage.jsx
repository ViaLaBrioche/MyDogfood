import React from "react";
import { CardList } from "../../components/CardList/CardList";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { SortMenu } from "../../components/SortMenu/SortMenu";


export const CatalogPage = ( {searchTerm, cards, setCards}) => {
    
    return <div><SortMenu setCards={setCards} cards={cards}/>
    <div>{!!searchTerm && <SearchResult searchTerm={searchTerm} cards={cards} />}</div>
    <CardList cards={cards}/>
    </div>
}