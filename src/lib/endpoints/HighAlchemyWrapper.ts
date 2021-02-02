import APIBaseWrapper from './APIBaseWrapper';

export default class HighAlchemyWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('high-alchemy', opts))
    }
}
