import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class BlastFurnaceWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('blast-furnace');
    }
}
