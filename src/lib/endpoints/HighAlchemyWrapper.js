import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class HighAlchemyWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('high-alchemy')
    }
}