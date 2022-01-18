import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button className="element__trash-btn" type="button"></button>
            <div className="element__container">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like">
                    <button className="element__like-btn" type="button"></button>
                    <span className="element__like-number">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;