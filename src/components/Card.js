import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <>
            <div className="element">
                <button className="element__trash" type="button"></button>
                <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="element__image" />
                <div className="element__info">
                    <h2 className="element__name">{props.card.name}</h2>
                    <div className="element__wrapper">
                        <button className="element__like" type="button"></button>
                        <span className="element__likes-number">{props.card.likes.length}</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card;