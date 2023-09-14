import APIBaseWrapper from './APIBaseWrapper';
import type { ItemListPromise } from '../types';

export default class MagicWrapper extends APIBaseWrapper {
    getHighAlchemy(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('high-alchemy', opts));
    }

    getEnchanting(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('magic/enchanting', opts));
    }

    getMagicTablets(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('magic-tablets', opts));
    }

    getPlankMaking(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('plank-making', opts));
    }

    getTreeSapling(opts = { filters: false }): ItemListPromise {
        return this._wrapGet(this.parseOptions('tree-sapling', opts));
    }
}
