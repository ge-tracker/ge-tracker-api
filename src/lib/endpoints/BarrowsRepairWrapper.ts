import APIBaseWrapper from './APIBaseWrapper';

export default class BarrowsRepairWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('barrows-repair')
    }
}
