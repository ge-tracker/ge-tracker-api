import APIBaseWrapper from './APIBaseWrapper';
import type {Item, ItemListPromise, ItemPromise} from '../types';

export default class ItemsWrapper extends APIBaseWrapper {
  getAllItems(): ItemListPromise {
    return this._wrapGet('items');
  }

  getItem(itemId: number, detail: boolean = false): ItemPromise {
    const url = !detail ? `items/${itemId}` : `items/${itemId}?detail=true`;
    return this._wrapGet<Item>(url);
  }

  getItems(itemIds: number[]): ItemListPromise {
    return this._wrapGet(`items/multi/${itemIds.join(',')}`);
  }

  search(query: string): ItemListPromise {
    return this._wrapGet(`items/search/${query}`);
  }

  /**
   * Get every item name and tag for the search box in the client's Game Mode;
   * keep a cached copy until `meta.sum` changes
   */
  searchPrefetch(): Promise<SearchPrefetch> {
    const url = 'search/prefetch';
    this.onRequest('GET', url);
    // not _wrapGet: it drops meta
    return this.client.get<SearchPrefetch>(url).then(({data}) => data);
  }

  getItemPeriod(itemId: number): Promise<ItemPeriod> {
    return this._wrapGet(`items/${itemId}/period`);
  }
}

export type SearchPrefetchItem = {
  name: string;
  item_id: number;
  slug: string;
};

export type SearchPrefetchTag = {
  name: string;
  slug: string;
};

/** `meta.sum` is an md5 of `data`; it changes only when `data` does */
export type SearchPrefetch = {
  data: {items: SearchPrefetchItem[]; tags: SearchPrefetchTag[]};
  meta: {sum: string};
};

export type ItemPeriod = {
  price: {
    day: number;
    week: number;
    month: number;
    month3: number;
    month6: number;
    year: number;
  };
  volume: {
    day: number;
    week: number;
    month: number;
    month3: number;
    month6: number;
    year: number;
  };
  high: {
    day: number;
    week: number;
  };
  low: {
    day: number;
    week: number;
  };
};
