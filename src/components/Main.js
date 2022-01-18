import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(userData => {
                setUserName(userData.name);
                setuserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
        api.getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-btn" type="button" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}>
                    <img className="profile__avatar" src={userAvatar} alt="Фото - Аватар" />
                </button>
                <div className="profile__description">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements" aria-label="Секция с описанием мест">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;