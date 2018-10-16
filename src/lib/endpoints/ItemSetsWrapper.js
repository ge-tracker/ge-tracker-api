import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class ItemSetsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('item-sets')
    }
}