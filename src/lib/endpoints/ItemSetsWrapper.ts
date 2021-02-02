import APIBaseWrapper from './APIBaseWrapper';

export default class ItemSetsWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('item-sets', opts))
    }
}
