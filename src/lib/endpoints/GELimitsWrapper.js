import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class GELimitsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('ge-limits')
    }
}