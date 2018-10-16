import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class SuggestedItemsWrapper extends APIBaseWrapper {
    refresh() {
        return this._wrapGet('suggested-items/refresh');
    }

    getItems() {
        return this._wrapGet('suggested-items');
    }
}