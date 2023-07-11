import React from 'react';
import './modal.scss'
import { ReactComponent as Close } from './Icons/Close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsActive } from '../../storageToolkit/slices/modalSlice';
import { AuthorizationForm } from '../AuthorizationForm/AuthorizationForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { ResetPasswordForm } from '../ResetPasswordForm/ResetPasswordForm';

export const Modal = () => {

    const [form, setForm] = useState()
    const dispatch = useDispatch()
    const { isModal, isForm } = useSelector((s)=> s.modal)

    const forma = () => {
        switch(isForm) {
            case 'authorization': setForm(<AuthorizationForm/>)
            break;
            case 'registration': setForm(<RegistrationForm/>)
            break;
            case 'resetPassword': setForm(<ResetPasswordForm/>)
            break;
            case 'tokenForResetPassword': setForm(<tokenForResetPassword/>)
            break;
        }
            
        }

    useEffect(()=>{
        forma()
    },[dispatch, isForm])


    return  <div className={`overlay ${isModal && "overlay__active"}`}>
                <div className={`modal__container ${!!isModal? "modal__active" : null}`}>
                    <div className="modal__btn__close" onClick={()=> dispatch(modalIsActive(false))}><Close className="modal__close__btn"/></div>
                    {form}
                </div>
            </div>
}