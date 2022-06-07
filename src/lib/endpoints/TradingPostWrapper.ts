import APIBaseWrapper from './APIBaseWrapper';

export type TradingPostUpdateFields = {
    qty?: number;
    price?: number;
    private?: boolean;
    completed?: boolean;
};

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
        const url = itemId ? `/trading-posts/${itemId}` : '/trading-posts';
        return this._wrapGet(url);
    }

    /**
     * Create Trading Post
     *
     * @return {*}
     */
    createPost(
        itemId: number,
        qty: number | string,
        price: number | string,
        buying: boolean,
        privateTrade: boolean,
        rsn: string | undefined = undefined
    ) {
        return this._wrapPost('/trading-posts', {
            itemId,
            qty,
            price,
            buying,
            rsn,
            private: privateTrade,
        });
    }

    updatePost(id: number, params: TradingPostUpdateFields = {}) {
        return this._wrapPost(`/trading-posts/${id}`, params);
    }

    deletePost(id: number) {
        return this._wrapDelete(`/trading-posts/${id}`);
    }
}
