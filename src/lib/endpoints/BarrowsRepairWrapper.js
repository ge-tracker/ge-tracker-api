import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class BarrowsRepairWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('barrows-repair')
    }
}