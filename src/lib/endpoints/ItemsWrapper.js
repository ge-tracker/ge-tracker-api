import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems() {
        return this._wrapGet('items')
    }

    getItem(itemId) {
        return this._wrapGet(`items/${itemId}`)
    }

    getItems(...itemIds) {
        return this._wrapGet(`items/multi/${itemIds.join(',')}`)
    }

    search(query) {
        return this._wrapGet(`items/search/${query}`)
    }
}