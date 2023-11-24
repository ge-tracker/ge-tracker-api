import APIBaseWrapper from './APIBaseWrapper';
import type {
  CalculatorListPromise,
  DataWrapped,
  Item,
  ItemListPromise,
} from '../types';

export type ItemCombinationPiece = {
  qty: number;
  item: DataWrapped<Item>;
};

export type ItemCombination = {
  qty: number;
  label: string | null;
  conversionCost: number;
  avgSellingQuantity: number;
  ratio: number;
  total: {
    cost: number;
    profit: number;
    pieces: number;
    piecesCost: number;
  };
  item: DataWrapped<Item>;
  pieces: ItemCombinationPiece[];
};

export type ItemCombinationResponse = ItemCombination[];

export default class ItemConversionsWrapper extends APIBaseWrapper {
  getBarrowsRepair(): CalculatorListPromise {
    return this._wrapGet('barrows-repair');
  }

  getItemSets(opts = {filters: false}): Promise<ItemCombinationResponse> {
    return this._wrapGet(this.parseOptions('item-sets', opts));
  }

  getCombinationItems(
    opts = {filters: false},
  ): Promise<ItemCombinationResponse> {
    return this._wrapGet(this.parseOptions('combination-items', opts));
  }
}
