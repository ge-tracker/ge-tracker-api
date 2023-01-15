import APIBaseWrapper from './APIBaseWrapper';
import { ItemListParams, ItemListPromise } from '../types';

export default class HighestMarginsWrapper extends APIBaseWrapper {
    getItems(opts: ItemListParams = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('highest-margins', opts));
    }
}
