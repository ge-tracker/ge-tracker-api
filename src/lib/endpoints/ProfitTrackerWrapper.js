import APIBaseWrapper from './APIBaseWrapper';

export default class ProfitTrackerWrapper extends APIBaseWrapper {
    getTransactions(opts = {}) {
        return this._wrapGet(this.parseOptions('/profit-tracker', opts));
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
        return this._wrapGet(this.parseOptions('/profit-tracker/buying', opts));
    }

    getBoughtTransactions(opts = {}) {
        return this._wrapGet(this.parseOptions('/profit-tracker/bought', opts));
    }

    getSellingTransactions(opts = {}) {
        return this._wrapGet(this.parseOptions('/profit-tracker/selling', opts));
    }

    getSoldTransactions(opts = {}) {
        return this._wrapGet(this.parseOptions('/profit-tracker/sold', opts));
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

    getMostProfitable() {
        return this._wrapGet('/profit-tracker/most-profitable');
    }
}