import APIBaseWrapper from './APIBaseWrapper';
export default class SubscriptionsWrapper extends APIBaseWrapper {
    getSubscription(subscriptionId: string): Promise<any>;
    getUserSubscriptions(userId: string): Promise<any>;
    terminateSubscription(subscriptionId: string): Promise<any>;
    refundSubscription(subscriptionId: string, amount: number): Promise<any>;
    createSubscription(transactionReceipt: object, platform: string, sessionId?: string | null): Promise<any>;
}
