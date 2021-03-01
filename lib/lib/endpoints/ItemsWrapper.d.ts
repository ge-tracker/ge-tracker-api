import APIBaseWrapper from './APIBaseWrapper';
import { ItemPromise } from "../../types";
export default class ItemsWrapper extends APIBaseWrapper {
    getAllItems(): Promise<any>;
    getItem(itemId: number, detail?: boolean): ItemPromise;
    getItems(...itemIds: Array<number>): Promise<any>;
    search(query: string): Promise<any>;
}
//# sourceMappingURL=ItemsWrapper.d.ts.map