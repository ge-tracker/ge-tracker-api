import APIBaseWrapper from './APIBaseWrapper';
export default class SuggestedItemsWrapper extends APIBaseWrapper {
    refresh() {
        return this._wrapGet('suggested-items/refresh');
    }
    getItems(opts = { filters: false }) {
        return this._wrapGet(this.parseOptions('suggested-items', opts));
    }
}
