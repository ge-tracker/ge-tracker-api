import APIBaseWrapper from './APIBaseWrapper';

export default class PlankMakingWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('plank-making')
    }
}
