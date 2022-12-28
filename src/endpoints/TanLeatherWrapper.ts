import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '@/types';

export default class TanLeatherWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('tan-leather');
    }
}
