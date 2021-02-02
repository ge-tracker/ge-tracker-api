import APIBaseWrapper from './APIBaseWrapper';

export default class SubscriptionsWrapper extends APIBaseWrapper {
    getSubscription(subscriptionId: string) {
        return this._wrapGet(`/subscriptions/${subscriptionId}`);
    }

    getUserSubscriptions(userId: string) {
        return this._wrapGet(`/subscriptions/user/${userId}`);
    }

    terminateSubscription(subscriptionId: string) {
        return this._wrapDelete(`/subscriptions/${subscriptionId}`);
    }

    refundSubscription(subscriptionId: string, amount: number) {
        return this._wrapPost(`/subscriptions/${subscriptionId}/refund`, {
            amount,
        });
    }

    createSubscription(transactionReceipt: object, platform: string, sessionId: string | null = null) {
        return this._wrapPost('/subscriptions', {
            transactionReceipt,
            platform,
            sessionId
        })
    }
}
