import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class FletchingWrapper extends APIBaseWrapper {
    getAmmo(): ItemListPromise {
        return this._wrapGet('fletching/ammo');
    }

    getBows(): ItemListPromise {
        return this._wrapGet('fletching/bows');
    }

    getShields(): ItemListPromise {
        return this._wrapGet('fletching/shields');
    }
}
