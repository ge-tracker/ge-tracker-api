import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../../types';

export default class PlankMakingWrapper extends APIBaseWrapper {
    getItems(): ItemListPromise {
        return this._wrapGet('plank-making');
    }
}
