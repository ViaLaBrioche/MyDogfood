import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { act } from "@testing-library/react";
import { Api } from "../../components/Api/Api"
import { filterFavorites, productRate } from "../utils/utils";

const config = {
    baseUrl: 'https://api.react-learning.ru/'
};
const api = new Api(config);

const initialState = {
    cards: [],
    favoritesCards: [],
    product: {}
}

export const getAllProducts = createAsyncThunk('getAllProducts', 
    async (i, { getState }) => {
    const state = await getState()
    const data = await api.getAllItems()
    return { ...data, userId: state.user.user._id }
})

export const toggleLike = createAsyncThunk('toggleLike',
    async ({product, like}, {getState}) => {
        const state = await getState()
        const updateCards = await api.toggleLike(product._id, like)
        return { updateCards, like, userId: state.user.user._id  }
})


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            switch (action.payload) {
                case 'cheap':
                    state.products = state.cards.sort((a, b) => a.price - b.price)
                    break;
                case 'expensive':
                    state.products = state.cards.sort((a, b) => b.price - a.price)
                    break;
                case 'new':
                    state.products = state.cards.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    break;
                case 'discount':
                    state.products = state.cards.sort((a, b) =>  b.discount - a.discount)
                    break;
                case 'popular':
                    state.products = state.cards.sort((a, b) => b.likes.length - a.likes.length)
                    break;
                case 'rating':
                    state.products = state.cards.sort((a, b) => productRate(b.reviews) - productRate(a.reviews))
                    break;
                }
            }
        },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action)  => {
        state.cards = action.payload.products.filter(item => 
            item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
        state.favoritesCards = filterFavorites(state.cards, action.payload.userId)
        })
        builder.addCase(toggleLike.fulfilled, (state, action) => {
            const toggleCard = action.payload.updateCards
            state.cards = state.cards.map((e) => e._id === toggleCard._id ? toggleCard : e)
            state.favoritesCards = filterFavorites(state?.cards, action.payload.userId)
        })
    }
})

export default productsSlice.reducer;
export const { sortProducts } = productsSlice.actions