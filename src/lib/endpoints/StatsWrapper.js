import APIBaseWrapper from './APIBaseWrapper';

export default class StatsWrapper extends APIBaseWrapper {
    getGlobalStats() {
        return this._wrapGet('stats');
    }
}