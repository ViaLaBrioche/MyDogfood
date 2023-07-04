import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import productsSlice from "./slices/productsSlice";
import reviewsSlice from "./slices/reviewsSlice";
import userSlice from "./slices/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        reviews: reviewsSlice,
        modal: modalSlice
    }
})


export default store;