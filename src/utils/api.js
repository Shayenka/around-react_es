class Api {
  constructor() {
    this.authorization = "3270d03d-8b4c-49a2-869b-f096d27af6a5";
  }

  _useFetch(url, method, body) {
    return fetch(url, {
      headers: {
        authorization: this.authorization,
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_05/users/me",
      `GET`
    ).then((result) => {
      return result;
    });
  }

  getCards() {
    return this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_05/cards",
      `GET`
    ).then((result) => {
      return result;
    });
  }

  editUserInfo(userData) {
    return this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_05/users/me",
      `PATCH`,
      userData
    ).then((result) => {
      return result;
    });
  }

  addNewCard(cardData) {
    return this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_05/cards",
      `POST`,
      cardData
    ).then((result) => {
      return result;
    });
  }

  addLike(cardId) {
    return this._useFetch(
      `https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`,
      `PUT`
    ).then((result) => {
      return result.likes;
    });
  }

  removeLike(cardId) {
    return this._useFetch(
      `https://around.nomoreparties.co/v1/web_es_05/cards/likes/${cardId}`,
      `DELETE`
    ).then((result) => {
      return result.likes;
    });
  }

  deleteCard(cardId) {
    return this._useFetch(
      `https://around.nomoreparties.co/v1/web_es_05/cards/${cardId}`,
      `DELETE`
    ).then((result) => {
      return result;
    });
  }

  changeAvatarProfile(userAvatar) {
    return this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_05/users/me/avatar",
      `PATCH`,
      userAvatar
    ).then((result) => {
      return result;
    });
  }
}

const api = new Api({
  address: "https://nomoreparties.co",
  groupId: `web_es_05`, // CHANGE IT WITH YOUR COHORT
  token: `3270d03d-8b4c-49a2-869b-f096d27af6a5`, // CHANGE IT WITH YOUR TOKEN
});

export default api;
