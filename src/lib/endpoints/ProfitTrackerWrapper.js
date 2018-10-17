import APIBaseWrapper from './APIBaseWrapper';

export default class ProfitTrackerWrapper extends APIBaseWrapper {
    getTransactions(opts = {}) {
        return this.client.get(this.parseOptions('/profit-tracker', opts))
            .then(({data}) => data);
    }

    getTransaction(id) {
        return this._wrapGet(`/profit-tracker/${id}`);
    }

    createTransaction(itemId, qty, buyPrice, params = {}) {
        return this._wrapPost('/profit-tracker', {
            item_id: itemId,
            qty: qty,
            buy_price: buyPrice,
            ...params
        });
    }

    updateTransaction(id, status, params = {}) {
        return this._wrapPost(`/profit-tracker/${id}`, {
            status,
            ...params
        });
    }

    deleteTransaction(id) {
        return this._wrapDelete(`/profit-tracker/${id}`);
    }

    getBuyingTransactions(opts = {}) {
        return this.client.get(this.parseOptions('/profit-tracker/buying', opts))
            .then(({data}) => data);
    }

    getBoughtTransactions(opts = {}) {
        return this.client.get(this.parseOptions('/profit-tracker/bought', opts))
            .then(({data}) => data);
    }

    getSellingTransactions(opts = {}) {
        return this.client.get(this.parseOptions('/profit-tracker/selling', opts))
            .then(({data}) => data);
    }

    getSoldTransactions(opts = {}) {
        return this.client.get(this.parseOptions('/profit-tracker/sold', opts))
            .then(({data}) => data);
    }

    getActiveTransactions() {
        return this._wrapGet('/profit-tracker/active-transactions');
    }

    getPreviousTransactions(itemId) {
        return this._wrapGet(`/profit-tracker/previous-transactions/${itemId}`);
    }

    getSummary() {
        return this._wrapGet('/profit-tracker/summary');
    }
}