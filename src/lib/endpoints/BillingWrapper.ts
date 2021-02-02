import APIBaseWrapper from './APIBaseWrapper';

export type BillingProvider = 'stripe' | 'paypal' | 'molle';
export type BillingState = 'pending' | 'paid' | 'failed' | 'expired' | 'fraudulent' | 'disputed';
export type BillingPlan = 'premium_monthly_12' | 'premium_monthly_6' | 'premium_monthly_3' | 'premium_monthly';

export default class BillingWrapper extends APIBaseWrapper {
    createSession(plan: BillingPlan, provider: BillingProvider) {
        return this._wrapPost('/billing/sessions', {
            plan,
            provider
        });
    }

    updateSession(sessionId: string, state: BillingState) {
        return this._wrapPatch(`/billing/sessions/${sessionId}`, state);
    }

    getSession(sessionId: string) {
        return this._wrapGet(`/billing/sessions/${sessionId}`);
    }
}
