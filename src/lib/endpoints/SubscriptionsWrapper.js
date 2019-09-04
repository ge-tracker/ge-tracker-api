import APIBaseWrapper from './APIBaseWrapper';

export default class SubscriptionsWrapper extends APIBaseWrapper {
    getSubscription(subscriptionId) {
        return this._wrapGet(`/subscriptions/${subscriptionId}`);
    }

    getUserSubscriptions(userId) {
        return this._wrapGet(`/subscriptions/user/${userId}`);
    }

    terminateSubscription(subscriptionId) {
        return this._wrapDelete(`/subscriptions/${subscriptionId}`);
    }

    createSubscription(transactionReceipt, platform) {
        return this._wrapPost('/subscriptions', {
            transactionReceipt,
            platform,
        })
    }

    createSession(plan) {
        return this._wrapPost('/subscriptions/sessions', {
            plan
        });
    }
}
