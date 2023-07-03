import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "../../components/Api/Api"


const config = {
    baseUrl: 'https://api.react-learning.ru/'
};
const api = new Api(config);

const initialState = {
    user: {},
    loading: false
}

export const getUser = createAsyncThunk(
    "getUser",
    async function() {
        const data = await api.getUserInfo()
        return data;
    }
)

export const setUserInfo = createAsyncThunk(
    "setUser",
    async function(data) {
        await [api.setUserInfo(data), api.setUserAvatar(data)]
    })



const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false;
        })
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUser.rejected, (state) => {
            state.loading = true;
        })
    }   
})

export default userSlice.reducer;