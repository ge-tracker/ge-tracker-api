import APIBaseWrapper from './APIBaseWrapper';

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
}
