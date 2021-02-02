import APIBaseWrapper from './APIBaseWrapper';
export default class UserWrapper extends APIBaseWrapper {
    getById(userId: string): Promise<any>;
    search(query: string): Promise<any>;
    getAuthenticateUser(): Promise<any>;
}
