import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class FavouriteItemsWrapper extends APIBaseWrapper {
    addItem(itemId) {
        return this._wrapPost(`favourite-items`, {
            item_id: itemId
        });
    }

    deleteItem(favouriteItemsId) {
        return this._wrapDelete(`favourite-items/${favouriteItemsId}`);
    }

    getItems() {
        return this._wrapGet('favourite-items');
    }
}