import {handleResponseBody} from "../handlers";

export default class SubscriptionsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params = {}) {
        return this.client.post(path, params)
            .then(({data}) => data);
    }

    _wrapDelete(path) {
        return this.client.delete(path)
            .then(({data}) => data);
    }

    getSubscription(subscriptionId) {
        return this._wrapGet(`/subscriptions/${subscriptionId}`);
    }

    getUserSubscriptions(userId) {
        return this._wrapGet(`/subscriptions/user/${userId}`);
    }

    terminateSubscription(subscriptionId) {
        return this._wrapDelete(`/subscriptions/${subscriptionId}`);
    }
}