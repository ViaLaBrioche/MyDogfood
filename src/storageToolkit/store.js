import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counterSlice";
import modalSlice from "./slices/modalSlice";
import productsSlice from "./slices/productsSlice";
import reviewsSlice from "./slices/reviewsSlice";
import userSlice from "./slices/userSlice";


const store = configureStore({
    reducer: {
        counter: CounterSlice,
        user: userSlice,
        products: productsSlice,
        reviews: reviewsSlice,
        modal: modalSlice
    }
})


export default store;