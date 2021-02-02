import APIBaseWrapper from './APIBaseWrapper';

export default class AuthWrapper extends APIBaseWrapper {
    login(email: string, password: string) {
        return this._wrapPost('auth/login', {
            email,
            password
        });
    }

    login2fa(email: string, password: string, code: string) {
        return this._wrapPost('auth/2fa', {
            email,
            password,
            code
        });
    }

    logout() {
        return this._wrapPost('auth/logout');
    }

    forgot(email: string) {
        return this._wrapPost('auth/forgot', {
            email
        });
    }

    register(username: string, email: string, password: string, passwordConfirm: string, terms: boolean, receiveEmail: boolean = false) {
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
