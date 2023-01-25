import APIBaseWrapper from './APIBaseWrapper';
import { ItemListPromise } from '../types';

export default class HerbloreWrapper extends APIBaseWrapper {
    getCleanHerbs() {
        return this._wrapGet('herblore/clean-herbs');
    }

    getMakePotions() {
        return this._wrapGet('herblore/make-potions');
    }

    getUnfinishedPotions() {
        return this._wrapGet('herblore/unfinished-potions');
    }

    getDecantPotions(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('decant-potions', opts));
    }
}
