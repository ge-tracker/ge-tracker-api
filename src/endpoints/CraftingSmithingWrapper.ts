import APIBaseWrapper from './APIBaseWrapper';
import type {CalculatorListPromise, Item, ItemListPromise} from '../types';

export default class CraftingSmithingWrapper extends APIBaseWrapper {
  getBlastFurnace(): CalculatorListPromise {
    return this._wrapGet('blast-furnace');
  }

  getCookingBrewing(): CalculatorListPromise {
    return this._wrapGet('crafting/cooking-brewing');
  }

  getTanLeather(): Promise<TanLeather[]> {
    return this._wrapGet('tan-leather');
  }
}

export type TanLeather = {
  leather: {
    data: Item;
  };
  tanned: {
    data: Item;
  };
  cost: {
    xp: number;
    cost: number;
    profit: number;
  };
};
