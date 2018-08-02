export default class AuthWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapPost(path, params = {}) {
        return this.client.post(path, params)
            .then(({data}) => data);
    }

    login(email, password) {
        return this._wrapPost('auth/login', {
            email,
            password
        });
    }

    login2fa(email, password, code) {
        return this._wrapPost('auth/2fa', {
            email,
            password,
            code
        });
    }

    logout() {
        return this._wrapPost('auth/logout');
    }
}