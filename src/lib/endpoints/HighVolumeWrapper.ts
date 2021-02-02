import APIBaseWrapper from './APIBaseWrapper';

export default class HighVolumeWrapper extends APIBaseWrapper {
    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('high-volume', opts))
    }
}
