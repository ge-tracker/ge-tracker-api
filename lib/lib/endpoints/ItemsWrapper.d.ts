import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise, ItemPromise } from "../../types";
export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems(): Promise<any>;
    getItem(itemId: number, detail?: boolean): ItemPromise;
    getItems(...itemIds: Array<number>): ItemListPromise;
    search(query: string): ItemListPromise;
}
//# sourceMappingURL=ItemsWrapper.d.ts.map