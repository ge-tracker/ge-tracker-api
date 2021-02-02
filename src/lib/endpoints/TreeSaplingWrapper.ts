import APIBaseWrapper from './APIBaseWrapper';

export default class TreeSaplingWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('tree-sapling')
    }
}
