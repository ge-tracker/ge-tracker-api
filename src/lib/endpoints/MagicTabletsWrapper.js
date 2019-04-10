import APIBaseWrapper from './APIBaseWrapper';

export default class MagicTabletsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('magic-tablets')
    }
}
