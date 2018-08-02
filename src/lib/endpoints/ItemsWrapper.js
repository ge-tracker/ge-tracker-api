import {handleResponseBody} from "../handlers";

export default class ItemsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getAllItems() {
        return this._wrapGet('items')
    }

    getItem(itemId) {
        return this._wrapGet(`items/${itemId}`)
    }

    getItems(...itemIds) {
        return this._wrapGet(`items/multi/${itemIds.join(',')}`)
    }

    search(query) {
        return this._wrapGet(`items/search/${query}`)
    }
}