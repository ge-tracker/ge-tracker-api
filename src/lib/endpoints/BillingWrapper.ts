import APIBaseWrapper from './APIBaseWrapper';

export type BillingProvider =
    | 'stripe'
    | 'paypal'
    | 'manual'
    | 'mollie'
    | 'giveaway'
    | 'google_pay'
    | 'apple_pay';

export type BillingState =
    | 'pending'
    | 'paid'
    | 'failed'
    | 'expired'
    | 'fraudulent'
    | 'disputed';

export type BillingPlan =
    | 'premium_monthly'
    | 'premium_monthly_3'
    | 'premium_monthly_6'
    | 'premium_monthly_12'
    | 'black_friday_6'
    | 'black_friday_12'
    | 'manual_payment'
    | 'one_off_1'
    | 'one_off_3'
    | 'one_off_6'
    | 'one_off_12'
    | 'giveaway_winner_6'
    | 'giveaway_winner_12'
    | 'suspended'
    | 'premium.oneoff.1'
    | 'premium.oneoff.3'
    | 'premium.oneoff.6'
    | 'premium.oneoff.12';

export default class BillingWrapper extends APIBaseWrapper {
    createSession(plan: BillingPlan, provider: BillingProvider) {
        return this._wrapPost('/billing/sessions', {
            plan,
            provider,
        });
    }

    updateSession(sessionId: string, state: BillingState) {
        return this._wrapPatch(`/billing/sessions/${sessionId}`, { state });
    }

    getSession(sessionId: string) {
        return this._wrapGet(`/billing/sessions/${sessionId}`);
    }
}
