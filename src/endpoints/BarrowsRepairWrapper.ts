import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class BarrowsRepairWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('barrows-repair');
    }
}
