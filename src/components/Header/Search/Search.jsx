import React from "react";
import { ReactComponent as IconLoupe } from "./Icon/loupe.svg";


export const Search = ({setSearchTerm}) => {
    return  <form className="search__form">
    <input onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search" className="search__input"/>
        <button type="button" className="search__button">
          <IconLoupe className="search__loupe__icon" />
        </button>
  </form>
    
}
