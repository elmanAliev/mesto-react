import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true); 
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true); 

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
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
  
  return (
    <div classNameName="App">
      <div className="root">
        <Header />
        <Main          
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isEditProfilePopupOpen}
          name = "edit"
          title = "Редактировать профиль"
          children = {
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" placeholder="Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40" required />
                <span className="name-input-error popup__input-error"></span>
              </div>
              <div className="popup__info-item">
                <input id="job-input" className="popup__input popup__input_type_job" type="text" name="job" placeholder="Профессиональная деятельность" value="Исследователь океана" minlength="2" maxlength="200" required />
                <span className="job-input-error popup__input-error"></span>
              </div>
            </fieldset>
          }
        />
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isAddPlacePopupOpen}
          name = "add"
          title = "Новое место"
          children = {
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="place-input" className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="place-input-error popup__input-error"></span>
              </div>
              <div className="popup__info-item">
                <input id="url-input" className="popup__input popup__input_type_url" type="url" name="url" placeholder="Ссылка на картинку" required />
                <span className="url-input-error popup__input-error"></span>
              </div>
            </fieldset>
          }
        />
        <PopupWithForm
          onClose = {closeAllPopups}
          name = "confirm"
          title = "Вы уверены"
          children = {<></>}
        />
        <PopupWithForm
          onClose = {closeAllPopups}
          isOpen = {isEditAvatarPopupOpen}
          name = "avatar"
          title = "Обновить аватар"
          children = {
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="avatar-input" className="popup__input popup__input_type_url" type="url" name="url" placeholder="Ссылка на картинку" required />
                <span className="avatar-input-error popup__input-error"></span>
              </div>
            </fieldset>
          }
        />
        <ImagePopup />
        

      </div>
      <template id="element">
        <div className="element">
          <button className="element__trash" type="button"></button>
          <img src="#" alt="" className="element__image" />
          <div className="element__info">
            <h2 className="element__name"></h2>
            <div className="element__wrapper">
              <button className="element__like" type="button"></button>
              <span className="element__likes-number"></span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
