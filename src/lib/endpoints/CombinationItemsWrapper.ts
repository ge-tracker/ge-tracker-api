import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../../types';

export default class CombinationItemsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('combination-items', opts));
    }
}
