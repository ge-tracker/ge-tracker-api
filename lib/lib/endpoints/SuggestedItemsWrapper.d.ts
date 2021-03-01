import APIBaseWrapper from './APIBaseWrapper';
import { ParamObject } from "../query-string";
import { ItemListPromise } from "../../types";
export default class SuggestedItemsWrapper extends APIBaseWrapper {
    refresh(): Promise<any>;
    getItems(opts?: ParamObject): ItemListPromise;
}
//# sourceMappingURL=SuggestedItemsWrapper.d.ts.map