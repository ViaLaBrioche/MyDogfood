import React from "react";

export const NotFound = () => {
    return <div id='oopss'>
      <div id='error-text'>
          <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
          <span>404 PAGE</span>
          <p class="p-a">
             . Страница, которую вы искали, не может быть найдена</p>
          <p class="p-b">
              ...Вернуться на главную страницу
          </p>
          <a href='/my_dogfood' class="back">Вернуться на главную</a>
      </div>
  </div>
}