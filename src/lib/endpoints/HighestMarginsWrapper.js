import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class HighestMarginsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('highest-margins')
    }
}