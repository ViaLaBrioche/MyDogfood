import './App.css';
import { useEffect, useState, useContext } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './components/CardList/main.css'
import { Footer }  from './components/Footer/Footer'
import { Api } from './components/Api/Api';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { NotFound } from './pages/NotFoundPage/NotFound'
import './pages/NotFoundPage/notFound.css'
import { FavoriteProductPage } from './pages/FavoriteProductPage/FavoriteProductPage';
import { UserContext } from './context/Context';

function App() {

  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };

  const api = new Api(config);
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [user, setUser] = useState({});
  const [favoriteCards, setFavoriteCards] = useState([])


  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
    return cards.filter(({name}) => 
      name.toLowerCase().includes(searchText.toLowerCase())
  )
};

const filterFavorite = (cards, id) => {
  const newCards = cards.filter((e) => e.likes.includes(id))
  return newCards      
}


  useEffect(() => {
    const Debounce = setTimeout(() => {

  Promise.all([api.getAllItems(), api.getUserInfo()])
    .then(([cardsData, userData]) => {
      const cards = cardsData.products.filter(item => 
        item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
      setUser(userData)
      setCards(filterCards(searchTerm, cards))
      setFavoriteCards(filterFavorite(cards, userData._id))
      return
    })
    .catch((error) => {
        console.log(error)
    });
    }, 300);

  return () => clearTimeout(Debounce)

},[searchTerm]);


  return (
  <UserContext.Provider value={user}>
    <div className="App">
      <Header favoritesCards={favoriteCards} setSearchTerm={setSearchTerm}/>
    <div className='main__container'>
        <Routes>
          <Route path="/my_dogfood" element={<CatalogPage setCards={setCards} cards={cards} searchTerm={searchTerm}/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/favorite" element={<FavoriteProductPage userId={user._id} favoriteCards={favoriteCards} />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    <Footer/>
    </div>
  </UserContext.Provider>
  );
}

export default App;
