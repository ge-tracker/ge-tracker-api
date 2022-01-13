import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from "../../types";

export default class TreeSaplingWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('tree-sapling')
    }
}
