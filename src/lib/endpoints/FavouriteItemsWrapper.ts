import APIBaseWrapper from './APIBaseWrapper';

export interface FavouriteItemReorder {
    item_id: number;
    order: number;
}

export type FavouriteItemReorderRequest = Array<FavouriteItemReorder>;

export default class FavouriteItemsWrapper extends APIBaseWrapper {
    addItem(itemId: number) {
        return this._wrapPost(`favourite-items`, {
            item_id: itemId
        });
    }

    deleteItem(favouriteItemsId: number) {
        return this._wrapDelete(`favourite-items/${favouriteItemsId}`);
    }

    deleteItemByItemId(itemId: number) {
        return this._wrapDelete(`favourite-items/itemId/${itemId}`);
    }

    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('favourite-items', opts));
    }

    /**
     * Update favourite items sort order
     *
     * @param update
     * @returns {*}
     */
    reorder(update: FavouriteItemReorderRequest) {
        return this._wrapPost('favourite-items/reorder', {
            update
        });
    }
}
