import {handleResponseBody} from "../api";

export default class HighestMarginsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getItems() {
        return this._wrapGet('highest-margins')
    }
}