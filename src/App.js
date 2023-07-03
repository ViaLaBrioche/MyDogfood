import './App.css';
import { useMemo, useEffect, useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './components/CardList/main.css'
import { Footer }  from './components/Footer/Footer'
import { Api } from './components/Api/Api';
import './pages/NotFoundPage/notFound.css'
import { ModalContext, UserContext } from './context/Context';
import { Modal } from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './storageToolkit/slices/userSlice';
import { getAllProducts } from './storageToolkit/slices/productsSlice';
import { AllRoutes } from './components/Routes/AllRoutes';

function App() {
  
  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };
  const dispatch = useDispatch()
  const api = new Api(config);
  const { cards } = useSelector((s)=> s.products)
  const {isAuthorized} = useSelector((s) => s.user)
  const [basketCards, setBasketCards] = useState([])

  const addToBasket = (id) => api.getProductById(id)
  .then(card => {
    const newCards = cards.filter((e) => e._id.includes(card._id))
    const oldCards = basketCards.filter((e) => e._id.includes(card._id))
      if (!!oldCards.length) {
        alert('Товар уже в корзине')
      } else {setBasketCards([...newCards, ...basketCards])}
    return
  })
  
  useEffect(() => {
    if (!isAuthorized) return;
    dispatch(getUser())
      .then(() => dispatch(getAllProducts()))
  }, [dispatch, isAuthorized])


  const contextUser = {
    addToBasket,
    basketCards,
  }

  const contextModal = {
    useMemo,
  }

  return (
  <ModalContext.Provider value={contextModal}>  
      <UserContext.Provider value={contextUser}>
        <div className="App">
          <Header/>
        <div className='main__container content'>
            <AllRoutes/>
            <Modal/>
        </div>
        <Footer/>
        </div>
      </UserContext.Provider>
  </ModalContext.Provider> 
    );
}

export default App;
