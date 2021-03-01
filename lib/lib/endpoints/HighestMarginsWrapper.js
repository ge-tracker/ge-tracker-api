import APIBaseWrapper from './APIBaseWrapper';
export default class HighestMarginsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }) {
        return this._wrapGet(this.parseOptions('highest-margins', opts));
    }
}
