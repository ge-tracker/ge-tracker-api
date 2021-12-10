import APIBaseWrapper from './APIBaseWrapper';
export default class TradingPostWrapper extends APIBaseWrapper {
    /**
     * Get Trading Posts
     *
     * `itemId` can be specified to load price alerts for a single item
     *
     * @param {Number} itemId
     * @return {*}
     */
    getPosts(itemId = null) {
        const url = (itemId) ? `/trading-posts/${itemId}` : '/trading-posts';
        return this._wrapGet(url);
    }
    /**
     * Create Trading Post
     *
     * @return {*}
     */
    createPost(itemId, qty, price, buying, privateTrade, rsn = undefined) {
        return this._wrapPost('/trading-posts', {
            itemId,
            qty,
            price,
            buying,
            rsn,
            private: privateTrade,
        });
    }
    updatePost(id, params = {}) {
        return this._wrapPost(`/trading-posts/${id}`, params);
    }
    deletePost(id) {
        return this._wrapDelete(`/trading-posts/${id}`);
    }
}
