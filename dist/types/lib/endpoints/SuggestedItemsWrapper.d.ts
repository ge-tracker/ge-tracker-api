import APIBaseWrapper from './APIBaseWrapper';
import { ParamObject } from "../query-string";
export default class SuggestedItemsWrapper extends APIBaseWrapper {
    refresh(): Promise<any>;
    getItems(opts?: ParamObject): Promise<any>;
}
