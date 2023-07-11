import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Footer }  from './components/Footer/Footer'
import { Modal } from './components/Modal/Modal';
import { getUser } from './storageToolkit/slices/userSlice';
import { AllRoutes } from '../src/Routes/AllRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './storageToolkit/slices/productsSlice';
import { modalIsActive, setIsForm } from './storageToolkit/slices/modalSlice';
import './App.css';
import './components/CardList/main.css'
import './pages/NotFoundPage/notFound.css'

function App() {

  const dispatch = useDispatch()
  const {isAuthorized} = useSelector((s) => s.user)
  
  const openModal = () => {
    if (!isAuthorized) {
        dispatch(modalIsActive(true))
        dispatch(setIsForm('authorization'))
    }
    }

  useEffect(() => {
    if (!isAuthorized) return;
    dispatch(getUser())
      .then(() => dispatch(getAllProducts()))
  }, [dispatch, isAuthorized])

  return (
        <div className="App">
          <Header/>
        <div className='main__container content'>
            {!!isAuthorized ? <AllRoutes/> :  openModal()}
            <Modal/>
        </div>
        <Footer />
        </div>
    );
}

export default App;
