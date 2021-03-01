import APIBaseWrapper from './APIBaseWrapper';
// class Testing extends APIBaseWrapper implements HighestMargins {
//     getItems(opts: object = {filters: false}): Promise<ItemArray> {
//         return this._wrapGet(this.parseOptions('highest-margins', opts))
//     }
// }
//
// Testing.getItems().then(data => data[0].approxProfit);
export default class HighestMarginsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }) {
        return this._wrapGet(this.parseOptions('highest-margins', opts));
    }
}
