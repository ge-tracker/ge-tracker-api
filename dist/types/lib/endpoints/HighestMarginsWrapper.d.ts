import APIBaseWrapper, { ApiBase } from './APIBaseWrapper';
import { ItemArray, ItemListFilterToggle } from "../../types";
export interface HighestMargins extends ApiBase {
    getItems(opts: ItemListFilterToggle): Promise<ItemArray>;
}
export default class HighestMarginsWrapper extends APIBaseWrapper implements HighestMargins {
    getItems(opts?: ItemListFilterToggle): Promise<ItemArray>;
}
