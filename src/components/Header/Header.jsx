import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as LogoDogoMini} from './LogoDogo/logoDogoMini.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React, { useCallback } from 'react'
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { modalIsActive, setIsForm } from '../../storageToolkit/slices/modalSlice'

export const Header = () => {


    const { favoritesCards } = useSelector((s) => s.products)
    const { isAuthorized } = useSelector((s) => s.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const openModal = useCallback(() => {
        if (!isAuthorized) {
            dispatch(modalIsActive(true))
            dispatch(setIsForm('authorization'))
        }
        else {navigate("/userInfo")}
        },[isAuthorized])        
    
    const isAmount = favoritesCards.length;

    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <Link to="/my_dogfood"><LogoDogoMini className="header__logo_mini"/><LogoDogo className="header__logo"/></Link>
                        <Search />
                        <div className="header__icons">
                            <div className='header__heart__icon__conteiner'>
                            <Link to="/favorites">
                                <IconHeart/>
                                {!!isAmount && <div className='header__heart__favorite__amount'>{favoritesCards.length}</div>}
                            </Link>
                            </div>
                        <Link to="/basket"><IconBasket className="header__icon__basket" /></Link>
                        <IconDog className="header__icon__auth" onClick={()=> openModal()}/>
                        </div>
                    </div>
                </div>
            </header>
}