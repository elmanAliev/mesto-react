import React from 'react';

function Card(props) {

    return (
        <>
            <div className="element">
                <button className="element__trash" type="button"></button>
                <img src={props.link} alt="" className="element__image" />
                <div className="element__info">
                    <h2 className="element__name">{props.name}</h2>
                    <div className="element__wrapper">
                        <button className="element__like" type="button"></button>
                        <span className="element__likes-number">{props.likes.length}</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;