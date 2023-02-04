class Api {
    constructor() {
        this.url = "https://mesto.nomoreparties.co/v1/cohort-59";
        this.headers = '131e7fdb-149f-4853-99c1-5f7c0b1924bf';
    }

    getInitialCards() {
        return fetch(this.url +'/cards', {
            method: 'GET',
            headers: {
                authorization: this.headers,
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    getPersonInfo() {
        return fetch(this.url +'/users/me', {
            method: 'GET',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    sendUserInfo(data) {
        return fetch(this.url +'/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    addNewCard(data) {
        return fetch(this.url +'/cards', {
            method: 'POST',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    delCard(cardId) {
        return fetch(this.url +`/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    likeCard(cardId) {
        return fetch(this.url +`/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
// L
    removelikeCard(cardId) {
        return fetch(this.url +`/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    editAvatar(data) {
        return fetch(this.url +'/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this.headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

}

export const api = new Api();