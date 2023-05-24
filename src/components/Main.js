import React, { useState, useEffect } from "react";
import api from "../utils/api";
import editprofile from "../images/Edit.svg";
import addcard from "../images/Signo+.svg";
import deleteCard from "../images/Papelera.svg";
import likeCard from "../images/like.svg";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((response) => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })
      .catch((error) => {
        console.log("Error al obtener los datos del usuario:", error);
      });

    api
      .getCards()
      .then((response) => {
        setCards([response]);
      })
      .catch((error) => {
        console.log("Error al obtener los datos de las tarjetas:", error);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatarClick}>
          <img
            className="profile__image"
            src={userAvatar}
            alt="Foto de Perfil"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </div>

        <div className="profile__info">
          <div>
            <h1 className="profile__name">{userName}</h1>
            <h2 className="profile__occupation">{userAbout}</h2>
          </div>
          <button className="profile__edit" onClick={onEditProfileClick}>
            <img
              className="profile__icon"
              src={editprofile}
              alt="icono de lápiz para editar perfil."
            />
          </button>
        </div>
        <button className="add-button" id="addButton" onClick={onAddPlaceClick}>
          <img
            className="add-button__icon"
            src={addcard}
            alt="Icono del signo + para añadir card."
          />
        </button>
      </section>

      <section className="elements">
        <div>
          {cards.map((card) => (
            <div className="element" key={card._id}>
              <img
                className="element__delete"
                src={deleteCard}
                alt="Icono de papelera para eliminar"
              />
              <img
                className="element__image"
                id="src"
                src={card.link}
                alt={card.name}
                style={{ backgroundImage: `url(${card.link})` }}
              />
              <div className="element__footer-photo">
                <h3 className="element__title">{card.name}</h3>
                <div className="likes-card">
                  <img
                    className="icon-like"
                    src={likeCard}
                    alt="Icono de corazón"
                  />
                  <span className="likes-card__count">{card.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <PopupWithForm
        name="confirmDeleteCard"
        title="¿Estás seguro?"
        submitButtonText="Sí"
      >
        {" "}
        <div></div>
      </PopupWithForm> */}

      {/* <section className="popup popup_closed" id="popupImage">
        <div className="image-show">
          <img
            className="image-show__close-icon"
            src={closePopUp}
            alt="Icono de una X para cerrar imagen."
          />
          <img className="image-show__popup" src=" " alt="" />
          <h3 className="image-show__title"></h3>
        </div>
      </section> */}
    </main>
  );
}

export default Main;
