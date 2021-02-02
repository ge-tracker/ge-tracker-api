import APIBaseWrapper from './APIBaseWrapper';

export default class CombinationItemsWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('combination-items', opts))
    }
}
