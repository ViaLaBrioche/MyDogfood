import { createSlice } from "@reduxjs/toolkit"

const initialState ={

    value: 0,
    show: true
}

const counterSlice =  createSlice({
    name: "counterToolkit",
    initialState: initialState,
    reducers: {
        increment(state, action) {
            state.value = state.value + action.payload
        },
        decrement(state, action) {
            state.value = state.value - action.payload
        }

    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
