import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class StoreProfitWrapper extends APIBaseWrapper {
    getStores() {
        return this._wrapGet('stores')
    }

    getItems() {
        return this._wrapGet('stores/profit')
    }
}