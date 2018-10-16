import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class HighVolumeWrapper extends APIBaseWrapper {
    getItems() {
        return this._wrapGet('high-volume')
    }
}