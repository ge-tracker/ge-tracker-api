import {handleResponseBody} from "../api";

export default class DecantPotionsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getItems() {
        return this._wrapGet('decant-potions')
    }
}