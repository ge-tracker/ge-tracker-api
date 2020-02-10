import APIBaseWrapper from './APIBaseWrapper';

export default class UserWrapper extends APIBaseWrapper {
    getById(userId) {
        return this._wrapGet(`users/${userId}`);
    }

    search(query) {
        return this._wrapPost(`users/search`, {
            query
        });
    }

    getAuthenticateUser() {
        return this._wrapGet('users/me');
    }
}
