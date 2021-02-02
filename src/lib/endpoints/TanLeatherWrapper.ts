import APIBaseWrapper from './APIBaseWrapper';

export default class TanLeatherWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('tan-leather')
    }
}
