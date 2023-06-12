import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as LogoDogoMini} from './LogoDogo/logoDogoMini.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CardsContext } from '../../context/Context'

export const Header = () => {

    const {favoritesCards, setSearchTerm, openModal} = useContext(CardsContext)
    const isAmount = favoritesCards.length;


    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <Link to="/my_dogfood"><LogoDogoMini className="header__logo_mini"/><LogoDogo className="header__logo"/></Link>
                        <Search setSearchTerm={setSearchTerm}/>
                        <div className="header__icons">
                            <div className='header__heart__icon__conteiner'>
                            <Link to="/favorites">
                                <IconHeart/>
                                {!!isAmount && <div className='header__heart__favorite__amount'>{favoritesCards.length}</div>}
                            </Link>
                            </div>
                        <IconBasket className="header__icon__basket"/>
                        <IconDog className="header__icon__auth" onClick={()=>openModal()}/>
                        </div>
                    </div>
                </div>
            </header>
}