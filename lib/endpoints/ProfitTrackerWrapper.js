import {handleResponseBody} from "../api";

type ProfitTransaction = {
    item_id: number,
    qty: number,
    buy_price: any,
    sell_price?: any,
    status?: String,
    buy_date?: Date,
    bought_date?: Date,
    sell_date?: Date,
    sold_date?: Date,
    intended_sell_price?: any,
    change_pivot?: number,
    threshold?: number,
};

export default class ProfitTrackerWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params = {}) {
        return this.client.post(path, params)
            .then(({data}) => data);
    }

    _wrapDelete(path) {
        return this.client.delete(path)
            .then(({data}) => data);
    }

    getTransactions() {
        return this._wrapGet('/profit-tracker');
    }

    getTransaction(id) {
        return this._wrapGet(`/profit-tracker/${id}`);
    }

    createTransaction(itemId, qty, buyPrice, params: ProfitTransaction = {}) {
        return this._wrapPost('/profit-tracker', {
            item_id: itemId,
            qty: qty,
            buy_price: buyPrice,
            ...params
        });
    }

    updateTransaction(id, status, params: ProfitTransaction = {}) {
        return this._wrapPost(`/profit-tracker/${id}`, {
            status,
            ...params
        });
    }

    deleteTransaction(id) {
        return this._wrapDelete(`/profit-tracker/${id}`);
    }

    getBuyingTransactions() {
        return this._wrapGet('/profit-tracker/buying');
    }

    getBoughtTransactions() {
        return this._wrapGet('/profit-tracker/bought');
    }

    getSellingTransactions() {
        return this._wrapGet('/profit-tracker/selling');
    }

    getSoldTransactions() {
        return this._wrapGet('/profit-tracker/sold');
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