import APIBaseWrapper from './APIBaseWrapper';

export default class GELimitsWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('ge-limits', opts))
    }
}
