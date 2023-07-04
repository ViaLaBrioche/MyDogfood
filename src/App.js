import './App.css';
import { useEffect } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './components/CardList/main.css'
import { Footer }  from './components/Footer/Footer'
import './pages/NotFoundPage/notFound.css'
import { Modal } from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './storageToolkit/slices/userSlice';
import { getAllProducts } from './storageToolkit/slices/productsSlice';
import { AllRoutes } from './components/Routes/AllRoutes';

function App() {

  const dispatch = useDispatch()
  const {isAuthorized} = useSelector((s) => s.user)


  // const addToBasket = (id) => api.getProductById(id)
  // .then(card => {
  //   const newCards = cards.filter((e) => e._id.includes(card._id))
  //   const oldCards = basketCards.filter((e) => e._id.includes(card._id))
  //     if (!!oldCards.length) {
  //       alert('Товар уже в корзине')
  //     } else {setBasketCards([...newCards, ...basketCards])}
  //   return
  // })
  
  useEffect(() => {
    if (!isAuthorized) return;
    dispatch(getUser())
      .then(() => dispatch(getAllProducts()))
  }, [dispatch, isAuthorized])

  return (
        <div className="App">
          <Header/>
        <div className='main__container content'>
            <AllRoutes/>
            <Modal/>
        </div>
        <Footer />
        </div>
    );
}

export default App;
