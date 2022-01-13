import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from "../../types";

export default class MagicTabletsWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('magic-tablets')
    }
}
