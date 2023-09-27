import APIBaseWrapper from './APIBaseWrapper';
import type {ItemListPromise} from '../types';

export default class CraftingSmithingWrapper extends APIBaseWrapper {
  getBlastFurnace(): ItemListPromise {
    return this._wrapGet('blast-furnace');
  }

  getCookingBrewing(): ItemListPromise {
    return this._wrapGet('crafting/cooking-brewing');
  }

  getTanLeather(): ItemListPromise {
    return this._wrapGet('tan-leather');
  }
}
