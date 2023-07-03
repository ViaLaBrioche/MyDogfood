import React from 'react';
import './modal.scss'
import { ReactComponent as Close } from './Icons/Close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsActive } from '../../storageToolkit/slices/modalSlice';

export const Modal = ()=> {
    const dispatch = useDispatch()
    const { isModal, isForm } = useSelector((s)=> s.modal)


    return  <div className={`overlay ${!!isModal ? "overlay__active" : null}`}>
                <div className={`modal__container ${!!isModal? "modal__active" : null}`}>
                    <div className="modal__btn__close" onClick={()=> dispatch(modalIsActive(false))}><Close className="modal__close__btn"/></div>
                    {isForm}
                </div>
            </div>
}