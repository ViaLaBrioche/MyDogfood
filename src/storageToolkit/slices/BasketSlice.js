import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cards: [],
    favoritesCards: [],
    search: undefined,
}



const basketSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    }
})

export default basketSlice.reducer;
export const { } = basketSlice.actions