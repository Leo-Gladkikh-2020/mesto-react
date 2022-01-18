import React from 'react';

function Main() {
    return (
        <main class="content">
            <section class="profile">
                <button class="profile__avatar-btn" type="button">
                    <img class="profile__avatar" src="#" alt="Фото - Аватар" />
                </button>
                <div class="profile__description">
                    <div class="profile__title">
                        <h1 class="profile__name">Жак-Ив Кусто</h1>
                        <button class="profile__edit-btn" type="button"></button>
                    </div>
                    <p class="profile__subtitle">Исследователь океана</p>
                </div>
                <button class="profile__add-btn" type="button"></button>
            </section>
            <section class="elements" aria-label="Секция с описанием мест">
                <ul class="elements__list"></ul>
            </section>
        </main>
    );
}

export default Main;