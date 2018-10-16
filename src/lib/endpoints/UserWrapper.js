import APIBaseWrapper from './APIBaseWrapper';

export default class UserWrapper extends APIBaseWrapper {
    getById(userId) {
        return this.client.get(`users/${userId}`)
            .then(({data}) => data.data)
    }

    search(query) {
        return this.client.get(`users/search/${query}`)
            .then(({data}) => data.data)
    }

    getAuthenticateUser() {
        return this.client.get('users/me')
            .then(({data}) => data.data)
    }
}