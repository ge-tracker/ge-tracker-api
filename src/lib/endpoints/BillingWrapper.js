import APIBaseWrapper from './APIBaseWrapper';

export default class BillingWrapper extends APIBaseWrapper {
    createSession(plan, provider) {
        return this._wrapPost('/billing/sessions', {
            plan,
            provider
        });
    }

    updateSession(sessionId, state) {
        const data = typeof state === 'object'
                     ? state
                     : {state};

        return this._wrapPatch(`/billing/sessions/${sessionId}`, state);
    }

    getSession(sessionId) {
        return this._wrapGet(`/billing/sessions/${sessionId}`);
    }
}
