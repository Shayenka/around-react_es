import React, { useState, useEffect } from "react";
import Api from "../utils/Api.js";
import editprofile from "../images/Edit.svg";
import addcard from "../images/Signo+.svg";
import Card from "./Card.js";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo()
      .then((response) => {
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      })
      .catch((error) => {
        console.log("Error al obtener los datos del usuario:", error);
      });

    Api.getCards()
      .then((response) => {
        setCards(response);
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
            <Card key={card._id} card={card} />
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
