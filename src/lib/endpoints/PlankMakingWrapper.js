import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class PlankMakingWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('plank-making')
    }
}