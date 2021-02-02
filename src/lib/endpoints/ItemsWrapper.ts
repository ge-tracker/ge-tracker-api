import APIBaseWrapper from './APIBaseWrapper';

export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems() {
        return this._wrapGet('items')
    }

    getItem(itemId: number, detail: boolean = false) {
        const url = (!detail) ? `items/${itemId}` : `items/${itemId}?detail=true`;
        return this._wrapGet(url)
    }

    getItems(...itemIds: Array<number>) {
        return this._wrapGet(`items/multi/${itemIds.join(',')}`)
    }

    search(query: string) {
        return this._wrapGet(`items/search/${query}`)
    }
}
