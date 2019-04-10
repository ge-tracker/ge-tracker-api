import APIBaseWrapper from './APIBaseWrapper';

export default class BlastFurnaceWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('blast-furnace')
    }
}
