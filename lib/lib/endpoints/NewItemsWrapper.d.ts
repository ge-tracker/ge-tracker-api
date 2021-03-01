import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from "../../types";
export default class NewItemsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): ItemListPromise;
}
//# sourceMappingURL=NewItemsWrapper.d.ts.map