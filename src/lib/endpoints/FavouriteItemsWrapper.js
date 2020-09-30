import APIBaseWrapper from './APIBaseWrapper';

export default class FavouriteItemsWrapper extends APIBaseWrapper {
    addItem(itemId) {
        return this._wrapPost(`favourite-items`, {
            item_id: itemId
        });
    }

    deleteItem(favouriteItemsId) {
        return this._wrapDelete(`favourite-items/${favouriteItemsId}`);
    }

    deleteItemByItemId(itemId) {
        return this._wrapDelete(`favourite-items/itemId/${itemId}`);
    }

    getItems(opts = {filters: false}) {
        return this._wrapGet(this.parseOptions('favourite-items', opts));
    }
}
