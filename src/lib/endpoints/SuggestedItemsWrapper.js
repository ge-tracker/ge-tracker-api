import {handleResponseBody} from "../handlers";

export default class SuggestedItemsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    refresh() {
        return this._wrapGet('suggested-items/refresh');
    }

    getItems() {
        return this._wrapGet('suggested-items');
    }
}