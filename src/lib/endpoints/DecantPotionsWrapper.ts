import APIBaseWrapper from './APIBaseWrapper';

export default class DecantPotionsWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('decant-potions', opts))
    }
}
