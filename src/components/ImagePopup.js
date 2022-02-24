import React from 'react';

function ImagePopup() {

    return (
        <>
            <div className="popup popup_type_img">
                <div className="popup__overlay"></div>
                <div className="popup__wrapper">
                    <button className="popup__button popup__button_type_close close" type="button"></button>
                    <img src="#" alt="увеличенная картинка" className="popup__img" />
                    <p className="popup__img-text"></p>
                </div>
            </div>
        </>

    )
}

export default ImagePopup;