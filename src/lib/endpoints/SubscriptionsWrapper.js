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

    refundSubscription(subscriptionId, amount) {
        return this._wrapPost(`/subscriptions/${subscriptionId}/refund`, {
            amount,
        });
    }

    createSubscription(transactionReceipt, platform, sessionId = null) {
        return this._wrapPost('/subscriptions', {
            transactionReceipt,
            platform,
            sessionId
        })
    }
}
