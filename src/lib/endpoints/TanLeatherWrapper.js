import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class TanLeatherWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('tan-leather')
    }
}