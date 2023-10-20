import APIBaseWrapper from './APIBaseWrapper';
import type {Item, ItemListPromise} from '../types';

export type FavouriteItemReorder = {
  item_id: number;
  order: number;
};

export type FavouriteItemReorderRequest = Array<FavouriteItemReorder>;

export type FavouriteItem = Item & {favouriteItemsId: number};

export default class FavouriteItemsWrapper extends APIBaseWrapper {
  getItems(): ItemListPromise<FavouriteItem> {
    return this._wrapGet('favourite-items');
  }

  addItem(itemId: number) {
    return this._wrapPost(`favourite-items`, {
      item_id: itemId,
    });
  }

  deleteItem(favouriteItemsId: number) {
    return this._wrapDelete(`favourite-items/${favouriteItemsId}`);
  }

  deleteItemByItemId(itemId: number) {
    return this._wrapDelete(`favourite-items/itemId/${itemId}`);
  }

  /**
   * Update favourite items sort order
   *
   * @param update
   * @returns {*}
   */
  reorder(update: FavouriteItemReorderRequest) {
    return this._wrapPost('favourite-items/reorder', {
      update,
    });
  }
}
