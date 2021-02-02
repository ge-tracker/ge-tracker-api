import APIBaseWrapper from './APIBaseWrapper';

export type PriceAlertField = 'current' | 'selling' | 'buying' | 'profit';
export type PriceAlertType = 'above' | 'below';
export type PriceAlertMethod = {
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
    getAlerts(itemId = null) {
        const url = (itemId) ? `/price-alerts/${itemId}` : '/price-alerts';
        return this._wrapGet(url);
    }

    /**
     * Create Price Alert
     *
     * @return {*}
     */
    createAlert(itemId: number, field: PriceAlertField, type: PriceAlertType, price: number, methods: PriceAlertMethod = {}, maxTriggers: number = 10) {
        return this._wrapPost('/price-alerts', {
            itemId,
            field,
            type,
            price,
            methods,
            maxTriggers
        });
    }

    updateAlert(id: number, params = {}) {
        return this._wrapPost(`/price-alerts/${id}`, {
            status,
            ...params
        });
    }

    deleteAlert(id: number) {
        return this._wrapDelete(`/price-alerts/${id}`);
    }
}
