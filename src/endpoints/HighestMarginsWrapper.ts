import APIBaseWrapper from './APIBaseWrapper';
import { ItemListFilterToggle, ItemListPromise } from '@/types';

export default class HighestMarginsWrapper extends APIBaseWrapper {
    getItems(opts: ItemListFilterToggle = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('highest-margins', opts));
    }
}
