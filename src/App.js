import './App.css';
import { useCallback, useEffect } from 'react';
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
import { modalIsActive, setIsForm } from './storageToolkit/slices/modalSlice';

function App() {

  const dispatch = useDispatch()
  const {isAuthorized} = useSelector((s) => s.user)
  
  const openModal = useCallback(() => {
    if (!isAuthorized) {
        dispatch(modalIsActive(true))
        dispatch(setIsForm('authorization'))
    }
    },[isAuthorized])

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
