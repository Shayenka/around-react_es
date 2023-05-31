class Api {
  constructor({ address, groupId, token }) {
    this.authorization = token;
    this.address = address;
    this.groupId = groupId;
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
}

export default Api;
