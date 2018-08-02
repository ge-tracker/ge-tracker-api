import {handleResponseBody} from "../handlers";

export default class HighAlchemyWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getItems() {
        return this._wrapGet('high-alchemy')
    }
}