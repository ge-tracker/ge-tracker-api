import APIBaseWrapper from './APIBaseWrapper';
import { Item, ItemListParams } from '../types';

export interface ActiveItem extends Item {
    activeUsers: number;
}

export default class ActiveItemsWrapper extends APIBaseWrapper {
    getItems(opts: ItemListParams = { filters: false }): Promise<ActiveItem[]> {
        return this._wrapGet(this.parseOptions('active-items', opts));
    }
}
