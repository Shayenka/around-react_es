import React, { useState, useEffect } from "react";
import Api from "../utils/Api.js";
import editprofile from "../images/Edit.svg";
import addcard from "../images/Signo+.svg";
import Card from "./Card.js";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  handleCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const api = new Api({
      address: "https://nomoreparties.co",
      groupId: `web_es_05`,
      token: `3270d03d-8b4c-49a2-869b-f096d27af6a5`,
    });
    api
      .getUserInfo()
      .then((response) => {
        console.log(response);
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
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
