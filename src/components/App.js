import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ name: '', link: '' });
    }

    return (
        < >
            <Header />

            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <PopupWithForm
                name="popup-edit"
                title="Редактировать профиль"
                btnText="Сохранить"
                isOpen={isEditProfilePopupOpen ? "popup_opened" : ''}
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_text_name" type="text" name="name" id="name" placeholder="Имя"
                    minLength="2" maxLength="40" required />
                <span className="popup__error" id="name-error"></span>
                <input className="popup__input popup__input_text_about" type="text" name="about" id="about" placeholder="О себе"
                    minLength="2" maxLength="200" required />
                <span className="popup__error" id="about-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="popup-avatar"
                title="Обновить аватар"
                btnText="Сохранить"
                isOpen={isEditAvatarPopupOpen ? "popup_opened" : ''}
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_text_link" type="url" name="avatar" id="avatar"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="avatar-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="popup-add"
                title="Новое место"
                btnText="Создать"
                isOpen={isAddPlacePopupOpen ? "popup_opened" : ''}
                onClose={closeAllPopups}
            >
                <input className="popup__input popup__input_text_title" type="text" name="title" id="title" placeholder="Название"
                    minLength="1" maxLength="30" required />
                <span className="popup__error" id="title-error"></span>
                <input className="popup__input popup__input_text_link" type="url" name="link" id="link"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="link-error"></span>
            </PopupWithForm>

            <PopupWithForm
                name="popup-place-delete"
                title="Вы уверены?"
                btnText="Да"
            />

            <ImagePopup
                onClose={closeAllPopups}
                card={selectedCard}
            />

        </ >
    );
}

export default App;