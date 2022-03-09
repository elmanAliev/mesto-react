import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])


  useEffect(() => {
    api.getUserInfo()
      .then((userInfoObject) => {
        setCurrentUser(userInfoObject)
        console.log(userInfoObject)
      })
      .catch((err) => {
        console.log(`Невозможно получить информацию о пользователе ${err}`);
      });
  }, [])

  function handleUpdateUser(data) {
    api.patchUserInfo(data)
      .then((userInfoObject) => {
        setCurrentUser(userInfoObject)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Невозможно загрузить данные на сервер ${err}`);
      })
  }

  function handleUpdateAvatar(data) {
    api.patchAvatar(data.avatar)
      .then((userInfoObject) => {
        setCurrentUser(userInfoObject)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Невозможно загрузить данные на сервер ${err}`);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="root">
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            name="add"
            title="Новое место"
            children={
              <fieldset className="popup__info">
                <div className="popup__info-item">
                  <input
                    id="place-input"
                    className="popup__input popup__input_type_place"
                    type="text"
                    name="place"
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                  <span className="place-input-error popup__input-error"></span>
                </div>
                <div className="popup__info-item">
                  <input
                    id="url-input"
                    className="popup__input popup__input_type_url"
                    type="url"
                    name="url"
                    placeholder="Ссылка на картинку"
                    required
                  />
                  <span className="url-input-error popup__input-error"></span>
                </div>
              </fieldset>
            }
          />
          <PopupWithForm
            onClose={closeAllPopups}
            name="confirm"
            title="Вы уверены"
            children={<></>}
          />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
