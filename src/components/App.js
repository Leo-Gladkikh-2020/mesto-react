import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
        < >
            <Header />
            <Main />
            <Footer />

            <div class="popup popup-edit">
                <div class="popup__content">
                    <button class="popup__close-btn" type="button"></button>
                    <h2 class="popup__title">Редактировать профиль</h2>
                    <form class="popup__form popup__form-edit" name="edit-form" noValidate>
                        <input class="popup__input popup__input_text_name" type="text" name="name" id="name" placeholder="Имя"
                            minLength="2" maxLength="40" required />
                        <span class="popup__error" id="name-error"></span>
                        <input class="popup__input popup__input_text_about" type="text" name="about" id="about" placeholder="О себе"
                            minLength="2" maxLength="200" required />
                        <span class="popup__error" id="about-error"></span>
                        <button class="popup__save-btn" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <div class="popup popup-avatar">
                <div class="popup__content">
                    <button class="popup__close-btn" type="button"></button>
                    <h2 class="popup__title">Обновить аватар</h2>
                    <form class="popup__form popup__form-avatar" name="avatar-form" noValidate>
                        <input class="popup__input popup__input_text_link" type="url" name="avatar" id="avatar"
                            placeholder="Ссылка на картинку" required />
                        <span class="popup__error" id="avatar-error"></span>
                        <button class="popup__save-btn" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <div class="popup popup-add">
                <div class="popup__content">
                    <button class="popup__close-btn" type="button"></button>
                    <h2 class="popup__title">Новое место</h2>
                    <form class="popup__form popup__form-add" name="add-form" noValidate>
                        <input class="popup__input popup__input_text_title" type="text" name="title" id="title" placeholder="Название"
                            minLength="1" maxLength="30" required />
                        <span class="popup__error" id="title-error"></span>
                        <input class="popup__input popup__input_text_link" type="url" name="link" id="link"
                            placeholder="Ссылка на картинку" required />
                        <span class="popup__error" id="link-error"></span>
                        <button class="popup__save-btn" type="submit">Создать</button>
                    </form>
                </div>
            </div>

            <div class="popup popup-place">
                <div class="popup__container">
                    <button class="popup__close-btn" type="button"></button>
                    <figure class="popup__figure">
                        <img src="#" alt="#" class="popup__image" />
                        <figcaption class="popup__caption"></figcaption>
                    </figure>
                </div>
            </div>

            <div class="popup popup-place-delete">
                <div class="popup__content">
                    <button class="popup__close-btn" type="button"></button>
                    <h2 class="popup__title">Вы уверены?</h2>
                    <form class="popup__form popup__form-place-delete" name="delete-form" noValidate>
                        <button class="popup__save-btn" type="submit">Да</button>
                    </form>
                </div>
            </div>

            <template class="template">
                <li class="element">
                    <img class="element__image" src="#" alt="#" />
                    <button class="element__trash-btn" type="button"></button>
                    <div class="element__container">
                        <h2 class="element__title"></h2>
                        <div class="element__like">
                            <button class="element__like-btn" type="button"></button>
                            <span class="element__like-number">0</span>
                        </div>
                    </div>
                </li>
            </template>

        </ >
    );
}

export default App;