import {handleResponseBody} from "../handlers";

export default class StoreProfitWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getStores() {
        return this._wrapGet('stores')
    }

    getItems() {
        return this._wrapGet('stores/profit')
    }
}