import APIBaseWrapper from './APIBaseWrapper';

export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems() {
        return this._wrapGet('items')
    }

    getItem(itemId, detail = false) {
        const url = (!detail) ? `items/${itemId}` : `items/${itemId}?detail=true`;
        return this._wrapGet(url)
    }

    getItems(...itemIds) {
        return this._wrapGet(`items/multi/${itemIds.join(',')}`)
    }

    search(query) {
        return this._wrapGet(`items/search/${query}`)
    }
}
