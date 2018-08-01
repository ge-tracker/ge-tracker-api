import {handleResponseBody} from "../api";

export default class MarketWatchWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getIndex(indexId) {
        return this._wrapGet(`market-watch/${indexId}`);
    }

    getSummary() {
        return this._wrapGet('market-watch');
    }
}