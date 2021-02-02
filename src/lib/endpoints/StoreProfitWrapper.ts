import APIBaseWrapper from './APIBaseWrapper';

export default class StoreProfitWrapper extends APIBaseWrapper {
    getStores() {
        return this._wrapGet('stores')
    }

    getItems() {
        return this._wrapGet('stores/profit')
    }
}
