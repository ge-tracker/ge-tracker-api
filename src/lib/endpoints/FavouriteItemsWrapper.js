import {handleResponseBody} from "../handlers";

export default class FavouriteItemsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params) {
        return this.client.post(path, params)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapDelete(path) {
        return this.client.delete(path)
            .then(({data}) => data);
    }

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