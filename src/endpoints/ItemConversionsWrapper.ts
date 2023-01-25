import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class ItemConversionsWrapper extends APIBaseWrapper {
    getBarrowsRepair(): ItemListPromise {
        return this._wrapGet('barrows-repair');
    }

    getItemSets(opts = { filters: false }) {
        return this._wrapGet(this.parseOptions('item-sets', opts));
    }

    getCombinationItems(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('combination-items', opts));
    }
}
