import APIBaseWrapper from './APIBaseWrapper';

export default class MarketWatchWrapper extends APIBaseWrapper {
    getIndex(indexId: number | string) {
        return this._wrapGet(`market-watch/${indexId}`);
    }

    getSummary() {
        return this._wrapGet('market-watch');
    }
}
