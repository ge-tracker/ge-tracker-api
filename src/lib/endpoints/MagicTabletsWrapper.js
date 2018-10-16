import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class MagicTabletsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('magic-tablets')
    }
}