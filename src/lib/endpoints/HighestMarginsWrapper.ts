import APIBaseWrapper, {ApiBase} from './APIBaseWrapper';
import {ItemArray, ItemListFilterToggle} from "../../types";

export interface HighestMargins extends ApiBase {
    getItems(opts: ItemListFilterToggle): Promise<ItemArray>;
}

// class Testing extends APIBaseWrapper implements HighestMargins {
//     getItems(opts: object = {filters: false}): Promise<ItemArray> {
//         return this._wrapGet(this.parseOptions('highest-margins', opts))
//     }
// }
//
// Testing.getItems().then(data => data[0].approxProfit);

export default class HighestMarginsWrapper extends APIBaseWrapper implements HighestMargins {
    getItems(opts: ItemListFilterToggle = {filters: false}): Promise<ItemArray> {
        return this._wrapGet(this.parseOptions('highest-margins', opts))
    }
}
