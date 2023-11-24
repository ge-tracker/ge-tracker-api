import APIBaseWrapper from './APIBaseWrapper';
import type {CalculatorItem, CalculatorListPromise, Item} from '../types';

export default class FletchingWrapper extends APIBaseWrapper {
  getAmmo(): CalculatorListPromise {
    return this._wrapGet('fletching/ammo');
  }

  getBows(): CalculatorListPromise<CalculatorItem<Item, FletchingBowsMethods>> {
    return this._wrapGet('fletching/bows');
  }

  getShields(): CalculatorListPromise {
    return this._wrapGet('fletching/shields');
  }
}

export type FletchingBowsMethods = {
  all: {
    negate: string[];
  };
  string_only: {
    negate: string[];
  };
};
