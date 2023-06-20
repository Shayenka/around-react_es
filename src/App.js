import "./index.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import EditProfilePopup from "./components/EditProfilePopup.js";
import EditAvatarPopup from "./components/EditAvatarPopup.js";
import AddPlacePopup from "./components/AddPlacePopup";
import api from "./utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteCardPopupOpen, setIsConfirmDeleteCardPopupOpen] =
    useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((response) => {
        console.log(response);
        setCurrentUser(response);
      })
      .catch((error) => {
        console.log("Error al obtener los datos del usuario:", error);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((response) => {
        setCards(response);
      })
      .catch((error) => {
        console.log("Error al obtener los datos de las tarjetas:", error);
      });
  }, []);

  function handleUpdateUser(user) {
    api.editUserInfo(user.name, user.about).then((response) => {
      setCurrentUser(response);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(avatar) {
    const userAvatar = { avatar: avatar };
    api.changeAvatarProfile(userAvatar).then((response) => {
      setCurrentUser(response);
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(
        cards.filter((item) => {
          return item._id !== card._id;
        })
      );
    });
  }

  function handleAddPlaceSubmit(name, link) {
    api.addNewCard(name, link).then((data) => {
      setCards([data, ...cards]);
      closeAllPopups();
    });
  }

  function handleCardClick(cardInfo) {
    setSelectedCard(cardInfo);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            handleCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          {isEditProfilePopupOpen && (
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
          )}

          {isEditAvatarPopupOpen && (
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
          )}

          {isAddPlacePopupOpen && (
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
            />
          )}

          {/* {selectedCard && (
            <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
          )}
          {isConfirmDeleteCardPopupOpen && (
            <PopupWithForm
              name="confirmDeleteCard"
              title="¿Estás seguro?"
              submitButtonText="Sí"
              isOpen={isConfirmDeleteCardPopupOpen}
              onClose={closeAllPopups}
            >
              {" "}
              <div></div>
            </PopupWithForm>
          )}  */}
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

// useEffect(() => {
//   api
//     .getCards()
//     .then((response) => {
//       setSelectedCard(response);
//     })
//     .catch((error) => {
//       console.log("Error al obtener los datos de las tarjetas:", error);
//     });
// }, []);
