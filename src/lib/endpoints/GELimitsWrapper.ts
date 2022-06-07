import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../../types';

export default class GELimitsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('ge-limits', opts));
    }
}
