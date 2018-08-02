import {handleResponseBody} from "../handlers";

export default class RSUpdatesWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    get() {
        return this._wrapGet('rs-updates')
    }
}