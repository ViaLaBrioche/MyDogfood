import React from "react"
import { Route, Routes } from "react-router-dom"
import { BasketPage } from "../../pages/BasketPage/BasketPage"
import { CatalogPage } from "../../pages/CatalogPage/CatalogPage"
import { FaqPage } from "../../pages/FaqPage/FaqPage"
import { FavoritesProductPage } from "../../pages/FavoritesProductPage/FavoritesProductPage"
import { NotFound } from "../../pages/NotFoundPage/NotFound"
import { ProductPage } from "../../pages/ProductPage/ProductPage"
import { UserInfoPage } from "../../pages/UserPage/UserInfoPage"
import { SetUserInfo } from "../UserInfo/SetUserInfo"


export const AllRoutes = () => {
    return <Routes>
                <Route path="/my_dogfood" element={<CatalogPage/>} />
                <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/favorites" element={<FavoritesProductPage />}/>
                <Route path="/userInfo" element={<UserInfoPage/>}/>
                <Route path="/faq" element={<FaqPage/>}/>
                <Route path="/setuserinfo" element={<SetUserInfo/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

}