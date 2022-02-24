import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div classNameName="App">
      <div className="root">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_type_edit">
          <div className="popup__overlay"></div>
          <form id="form-edit" className="popup__container" name="edit" novalidate>
            <button className="popup__button popup__button_type_close" type="button"></button> 
            <h2 className="popup__title">Редактировать профиль</h2>      
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" placeholder="Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40" required/>
                <span className="name-input-error popup__input-error"></span>
              </div>
              <div className="popup__info-item">
                <input id="job-input" className="popup__input popup__input_type_job" type="text" name="job" placeholder="Профессиональная деятельность" value="Исследователь океана" minlength="2" maxlength="200" required/>
                <span className="job-input-error popup__input-error"></span>
              </div>
            </fieldset>
            <button className="popup__button popup__button_type_save main-button">Cохранить</button>
          </form>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__overlay"></div>
          <form id="form-add" className="popup__container" name="add" novalidate>
            <button className="popup__button popup__button_type_close" type="button"></button> 
            <h2 className="popup__title">Новое место</h2>      
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="place-input" className="popup__input popup__input_type_place" type="text" name="place" placeholder="Название" minlength="2" maxlength="30" required/>
                <span className="place-input-error popup__input-error"></span>
              </div>
              <div className="popup__info-item">
                <input id="url-input" className="popup__input popup__input_type_url" type="url" name="url" placeholder="Ссылка на картинку" required/>
                <span className="url-input-error popup__input-error"></span>
              </div>
            </fieldset>
            <button className="popup__button popup__button_type_create main-button">Создать</button>
          </form>
        </div>
        <div className="popup popup_type_img">
          <div className="popup__overlay"></div>
          <div className="popup__wrapper">
            <button className="popup__button popup__button_type_close close" type="button"></button> 
            <img src="#" alt="увеличенная картинка" className="popup__img"/>
            <p className="popup__img-text"></p>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__overlay"></div>
          <form className="popup__container"> 
            <button className="popup__button popup__button_type_close" type="button"></button>    
            <h2 className="popup__title">Вы уверены</h2>      
            <button className="popup__button popup__button_type_confirm main-button">Да</button>
          </form> 
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__overlay"></div>
          <form id="form-save-avatar" className="popup__container" name="avatar" novalidate>
            <button className="popup__button popup__button_type_close" type="button"></button> 
            <h2 className="popup__title">Обновить аватар</h2>      
            <fieldset className="popup__info">
              <div className="popup__info-item">
                <input id="avatar-input" className="popup__input popup__input_type_url" type="url" name="url" placeholder="Ссылка на картинку" required/>
                <span className="avatar-input-error popup__input-error"></span>
              </div>
            </fieldset>
            <button className="popup__button popup__button_type_save-avatar main-button">Сохранить</button>
          </form>
        </div>
      </div>
      <template id="element">
        <div className="element">
          <button className="element__trash" type="button"></button>
          <img src="#" alt="" className="element__image"/>
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
