import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '@/types';

export default class DecantPotionsWrapper extends APIBaseWrapper {
    getItems(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('decant-potions', opts));
    }
}
