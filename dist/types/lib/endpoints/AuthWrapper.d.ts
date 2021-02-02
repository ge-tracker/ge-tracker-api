import APIBaseWrapper from './APIBaseWrapper';
export default class AuthWrapper extends APIBaseWrapper {
    login(email: string, password: string): Promise<any>;
    login2fa(email: string, password: string, code: string): Promise<any>;
    logout(): Promise<any>;
    forgot(email: string): Promise<any>;
    register(username: string, email: string, password: string, passwordConfirm: string, terms: boolean, receiveEmail?: boolean): Promise<any>;
}
