import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class NewItemsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('new-items')
    }
}