import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class RSUpdatesWrapper extends APIBaseWrapper {
    get() {
        return this._wrapGet('rs-updates')
    }
}