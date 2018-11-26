import APIBaseWrapper from './APIBaseWrapper';

export default class PriceAlertWrapper extends APIBaseWrapper {
    /**
     * Get Price Alerts
     *
     * `itemId` can be specified to load price alerts for a single item
     *
     * @param itemId
     * @return {*}
     */
    getAlerts(itemId = null) {
        const url = (itemId) ? `/price-alerts/${itemId}` : '/price-alerts';
        return this._wrapGet(url);
    }

    /**
     * Create Price Alert
     *
     * `field` should be one of: [current, selling, buying, profit]
     * `type` should be one of: [above, below]
     * (optional) `methods` should be an object in the format: `{sms: true, email: true}`
     *
     * @param itemId
     * @param field
     * @param type
     * @param price
     * @param methods
     * @return {*}
     */
    createAlert(itemId, field, type, price, methods = {}) {
        return this._wrapPost('/profit-tracker', {
            itemId,
            field,
            type,
            price,
            methods
        });
    }

    updateAlert(id, params = {}) {
        return this._wrapPost(`/price-alerts/${id}`, {
            status,
            ...params
        });
    }

    deleteAlert(id) {
        return this._wrapDelete(`/price-alerts/${id}`);
    }
}