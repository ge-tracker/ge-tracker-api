import APIBaseWrapper from './APIBaseWrapper';

export default class BillingWrapper extends APIBaseWrapper {
    createSession(plan, provider) {
        return this._wrapPost('/billing/sessions', {
            plan,
            provider
        });
    }

    getSession(sessionId) {
        return this._wrapGet(`/billing/sessions/${sessionId}`);
    }
}
