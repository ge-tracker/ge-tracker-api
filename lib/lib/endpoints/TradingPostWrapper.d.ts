import APIBaseWrapper from './APIBaseWrapper';
export declare type TradingPostUpdateFields = {
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
    getPosts(itemId?: null): Promise<any>;
    /**
     * Create Trading Post
     *
     * @return {*}
     */
    createPost(itemId: number, qty: number | string, price: number | string, buying: boolean, privateTrade: boolean, rsn?: string | undefined): Promise<any>;
    updatePost(id: number, params?: TradingPostUpdateFields): Promise<any>;
    deletePost(id: number): Promise<any>;
}
//# sourceMappingURL=TradingPostWrapper.d.ts.map