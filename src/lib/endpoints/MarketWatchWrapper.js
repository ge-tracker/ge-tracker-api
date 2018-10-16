import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class MarketWatchWrapper extends APIBaseWrapper {
    getIndex(indexId) {
        return this._wrapGet(`market-watch/${indexId}`);
    }

    getSummary() {
        return this._wrapGet('market-watch');
    }
}