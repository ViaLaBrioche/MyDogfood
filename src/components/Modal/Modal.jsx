import React, { useContext } from 'react';
import './modal.scss'
import { ModalContext } from '../../context/Context';
import { ReactComponent as Close } from './Icons/Close.svg';

export const Modal = ()=> {


    const {closeModal, modalIsOpen, isForm} = useContext(ModalContext)

    return <div className={`modal__container ${!!modalIsOpen ? "modal__active" : null}`}>
            <div className="modal__btn__close" onClick={()=> closeModal()}><Close/></div>
            {isForm}
    </div>
}