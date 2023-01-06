import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class NewItemsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('new-items', opts));
    }
}
