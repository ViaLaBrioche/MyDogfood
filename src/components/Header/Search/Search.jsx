import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../../hooks/DebounceHook";
import { searchProduct, searchText } from "../../../storageToolkit/slices/productsSlice";
import { ReactComponent as IconLoupe } from "./Icon/loupe.svg";


export const Search = () => {
  const dispatch = useDispatch()
  const {search} = useSelector((s)=> s.products)
  const debounceValue = useDebounce(search, 350)

  const setSearchText = (searchValue) => {
    dispatch(searchText(searchValue))
}
    useEffect(() => {
        if (debounceValue=== undefined) return;
        dispatch(searchProduct(debounceValue))
    }, [debounceValue, dispatch])

    return  <form className="search__form">
    <input onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search" className="search__input"/>
        <button type="button" className="search__button">
          <IconLoupe className="search__loupe__icon" />
        </button>
  </form>
    
}
