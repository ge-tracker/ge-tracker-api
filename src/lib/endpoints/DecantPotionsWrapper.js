import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class DecantPotionsWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('decant-potions')
    }
}