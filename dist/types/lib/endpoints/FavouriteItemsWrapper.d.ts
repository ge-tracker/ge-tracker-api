import APIBaseWrapper from './APIBaseWrapper';
export interface FavouriteItemReorder {
    item_id: number;
    order: number;
}
export declare type FavouriteItemReorderRequest = Array<FavouriteItemReorder>;
export default class FavouriteItemsWrapper extends APIBaseWrapper {
    addItem(itemId: number): Promise<any>;
    deleteItem(favouriteItemsId: number): Promise<any>;
    deleteItemByItemId(itemId: number): Promise<any>;
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
    /**
     * Update favourite items sort order
     *
     * @param update
     * @returns {*}
     */
    reorder(update: FavouriteItemReorderRequest): Promise<any>;
}
