import { createSlice } from "@reduxjs/toolkit"
import { AuthorizationForm } from "../../components/AuthorizationForm/AuthorizationForm"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm"
import { ResetPasswordForm } from "../../components/ResetPasswordForm/ResetPasswordForm"
import { TokenForResetPasswordForm } from "../../components/ResetPasswordForm/TokenForResetPasswordForm"


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
            state.isForm = payload
        },
        setIsForm: (state, action) => {
            switch (action.payload) {
                case 'authorization':
                    state.isForm = <AuthorizationForm/>
                    break;
                case 'registration':
                    state.isForm = <RegistrationForm/>
                    break;
                case 'resetPassword':
                    state.isForm = <ResetPasswordForm/>
                    break;
                case 'tokenForResetPassword':
                    state.isForm = <TokenForResetPasswordForm/>
                    break;
            }
            },
    }
})


export const { modalIsActive, setIsForm } = modalSlice.actions
export default modalSlice.reducer