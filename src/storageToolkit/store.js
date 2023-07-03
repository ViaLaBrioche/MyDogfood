import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counterSlice";
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";


const store = configureStore({
    reducer: {
        counter: CounterSlice,
        user: userSlice,
        products: productsSlice,
        
    }
})


export default store;