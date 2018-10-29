import APIBaseWrapper from './APIBaseWrapper';

export default class AuthWrapper extends APIBaseWrapper {
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

    forgot(email) {
        return this._wrapPost('auth/forgot', {
            email
        });
    }

    register(username, email, password, passwordConfirm, terms, receiveEmail = false) {
        return this._wrapPost('auth/register', {
            name: username,
            email,
            password,
            password_confirmation: passwordConfirm,
            terms,
            receiveEmail
        });
    }
}