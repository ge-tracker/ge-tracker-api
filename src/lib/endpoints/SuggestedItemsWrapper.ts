import APIBaseWrapper from './APIBaseWrapper';
import { ParamObject } from '../query-string';
import { ItemListPromise } from '../../types';

export default class SuggestedItemsWrapper extends APIBaseWrapper {
    refresh() {
        return this._wrapGet('suggested-items/refresh');
    }

    getItems(opts: ParamObject = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('suggested-items', opts));
    }
}
