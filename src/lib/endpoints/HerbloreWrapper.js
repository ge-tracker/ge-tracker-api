import {handleResponseBody} from "../handlers";

export default class HerbloreWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

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