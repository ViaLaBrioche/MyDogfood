import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "../../components/Api/Api";

const config = {
  baseUrl: 'https://api.react-learning.ru/'
};
const api = new Api(config);

const initialState ={
    reviews: [],
    loading: false
}

export const getAllProductReviews = createAsyncThunk(
  "reviews",
  async function(idProduct) {
      const reviews = await api.getAllReviewsById(idProduct)
      return reviews;
  }
)

export const addReview = createAsyncThunk(
  "addReview",
  async function(data) {
      const card = await api.addReview(data)
      return card
  }
)

export const deleteReview = createAsyncThunk(
  "deleteReview",
  async function(data) {
      const card = await api.deleteReview(data.idRev, data.idProduct)
      return card
  }
)

const reviewsSlice =  createSlice({
    name: "counterToolkit",
    initialState: initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllProductReviews.fulfilled, (state, action) => {
      state.reviews = action.payload
    })
      builder.addCase(addReview.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews
    })
      builder.addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews
    })
  }
})


export default reviewsSlice.reducer;
