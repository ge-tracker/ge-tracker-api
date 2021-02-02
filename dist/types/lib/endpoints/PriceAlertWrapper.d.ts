import APIBaseWrapper from './APIBaseWrapper';
export declare type PriceAlertField = 'current' | 'selling' | 'buying' | 'profit';
export declare type PriceAlertType = 'above' | 'below';
export declare type PriceAlertMethod = {
    sms?: boolean;
    email?: boolean;
    app?: boolean;
};
export default class PriceAlertWrapper extends APIBaseWrapper {
    /**
     * Get Price Alerts
     *
     * `itemId` can be specified to load price alerts for a single item
     *
     * @param {Number} itemId
     * @return {*}
     */
    getAlerts(itemId?: null): Promise<any>;
    /**
     * Create Price Alert
     *
     * @return {*}
     */
    createAlert(itemId: number, field: PriceAlertField, type: PriceAlertType, price: number, methods?: PriceAlertMethod, maxTriggers?: number): Promise<any>;
    updateAlert(id: number, params?: {}): Promise<any>;
    deleteAlert(id: number): Promise<any>;
}
