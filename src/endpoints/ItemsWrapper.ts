import APIBaseWrapper from './APIBaseWrapper';
import type {
  DataWrappedWithMeta,
  Item,
  ItemListPromise,
  ItemPromise,
} from '../types';

export type ItemPeriod = {
  price: {
    day: number;
    month: number;
    month3: number;
    month6: number;
    year: number;
  };
  volume: {
    day: number;
    month: number;
    month3: number;
    month6: number;
    year: number;
  };
};

export default class ItemsWrapper extends APIBaseWrapper {
  getAllItems(): ItemListPromise {
    return this._wrapGet('items');
  }

  getItem(itemId: number, detail: boolean = false): ItemPromise {
    const url = !detail ? `items/${itemId}` : `items/${itemId}?detail=true`;
    return this._wrapGet(url);
  }

  getItems(...itemIds: Array<number>): ItemListPromise {
    return this._wrapGet(`items/multi/${itemIds.join(',')}`);
  }

  search(query: string): ItemListPromise {
    return this._wrapGet(`items/search/${query}`);
  }

  getItemPeriod(itemId: number): Promise<ItemPeriod> {
    return this._wrapGet(`items/${itemId}/period`);
  }
}
