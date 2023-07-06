import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isModal: false,
    isForm: '',
}


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalIsActive: (state, {payload}) => {
            state.isModal = payload
        },
        setIsForm: (state, {payload}) => {
            switch (payload) {
                case 'authorization':
                    state.isForm = payload
                    break;
                case 'registration':
                    state.isForm = payload
                    break;
                case 'resetPassword':
                    state.isForm = payload
                    break;
                case 'tokenForResetPassword':
                    state.isForm = payload
                    break;
            }
            },
    }
})


export const { modalIsActive, setIsForm } = modalSlice.actions
export default modalSlice.reducer