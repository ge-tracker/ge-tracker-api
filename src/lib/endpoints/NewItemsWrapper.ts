import APIBaseWrapper from './APIBaseWrapper';

export default class NewItemsWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('new-items', opts))
    }
}
