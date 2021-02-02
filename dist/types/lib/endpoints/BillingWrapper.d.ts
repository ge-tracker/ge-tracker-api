import APIBaseWrapper from './APIBaseWrapper';
export declare type BillingProvider = 'stripe' | 'paypal' | 'molle';
export declare type BillingState = 'pending' | 'paid' | 'failed' | 'expired' | 'fraudulent' | 'disputed';
export declare type BillingPlan = 'premium_monthly_12' | 'premium_monthly_6' | 'premium_monthly_3' | 'premium_monthly';
export default class BillingWrapper extends APIBaseWrapper {
    createSession(plan: BillingPlan, provider: BillingProvider): Promise<any>;
    updateSession(sessionId: string, state: BillingState): Promise<any>;
    getSession(sessionId: string): Promise<any>;
}
