import APIBaseWrapper from './APIBaseWrapper';
import {ALL_MODES_PARAMS} from '../lib/game-mode';
import type {ParamObject} from '../lib/query-string';
import type {
  GameMode,
  Item,
  LegacyPaginated,
  PaginatedResponse,
} from '../types';

export type UpdateStatus = 'bought' | 'selling' | 'sold';
export type TransactionStatus = 'buying' & UpdateStatus;

export type ProfitTrackerListParams = ParamObject & {
  /** List every Game Mode's Transactions, whatever `gameMode()` holds */
  allModes?: boolean;
};

export default class ProfitTrackerWrapper extends APIBaseWrapper {
  getTransactions<P = LegacyPaginated>(
    opts: ProfitTrackerListParams = {},
  ): Promise<TransactionsResponse<P>> {
    return this.client
      .get(this.listUrl('/profit-tracker', opts))
      .then(({data}) => data);
  }

  getTransaction(id: string) {
    return this._wrapGet(`/profit-tracker/${id}`);
  }

  createTransaction(
    itemId: number,
    qty: number,
    buyPrice: number,
    params = {},
  ) {
    return this._wrapPost('/profit-tracker', {
      item_id: itemId,
      qty: qty,
      buy_price: buyPrice,
      ...params,
    });
  }

  updateTransaction(id: string, status: UpdateStatus, params = {}) {
    return this._wrapPost(`/profit-tracker/${id}`, {
      status,
      ...params,
    });
  }

  deleteTransaction(id: string) {
    return this._wrapDelete(`/profit-tracker/${id}`);
  }

  getBuyingTransactions(opts: ProfitTrackerListParams = {}) {
    return this.client
      .get(this.listUrl('/profit-tracker/buying', opts))
      .then(({data}) => data);
  }

  getBoughtTransactions(opts: ProfitTrackerListParams = {}) {
    return this.client
      .get(this.listUrl('/profit-tracker/bought', opts))
      .then(({data}) => data);
  }

  getSellingTransactions(opts: ProfitTrackerListParams = {}) {
    return this.client
      .get(this.listUrl('/profit-tracker/selling', opts))
      .then(({data}) => data);
  }

  getSoldTransactions(opts: ProfitTrackerListParams = {}) {
    return this.client
      .get(this.listUrl('/profit-tracker/sold', opts))
      .then(({data}) => data);
  }

  getActiveTransactions(opts: ProfitTrackerListParams = {}) {
    return this.client
      .get(this.listUrl('/profit-tracker/active-transactions', opts))
      .then(({data}) => data);
  }

  getPreviousTransactions(itemId: number) {
    return this._wrapGet(`/profit-tracker/previous-transactions/${itemId}`);
  }

  getSummary() {
    return this._wrapGet('/profit-tracker/summary');
  }

  getMostProfitable() {
    return this._wrapGet('/profit-tracker/most-profitable');
  }

  /**
   * Clear the client's current Game Mode only; RuneLite import data and
   * leaderboard entries go only when it clears the Main Game
   */
  clear() {
    return this._wrapPost('/profit-tracker/clear');
  }

  import(transactions: ImportTransaction[]) {
    return this._wrapPost('/profit-tracker/import', {transactions});
  }

  private listUrl(
    url: string,
    {allModes, ...opts}: ProfitTrackerListParams,
  ): string {
    return this.parseOptions(
      url,
      allModes ? {...opts, ...ALL_MODES_PARAMS} : opts,
    );
  }
}

export type ProfitTransaction = {
  id: string;
  mode: GameMode;
  status: TransactionStatus;
  order: {
    itemId: number;
    qty: number;
    buyPrice: number;
    sellPrice: number | null;
    intendedSellPrice: number | null;
  };
  dates: {
    buy: string | null;
    bought: string | null;
    sell: string | null;
    sold: string | null;
  };
  merchLog: {
    public: boolean | null;
    verified: boolean | null;
    rejected: boolean | null;
  };
  item: {
    data: Item;
  };
};

export type TransactionsResponse<P = LegacyPaginated> = PaginatedResponse<
  ProfitTransaction,
  P
>;

export type ImportTransaction = {
  id: string;
  itemId: number;
  qty: number | string;
  buyPrice: number | string;
  sellPrice?: number | string | null;
  status?: string | null;
  buyDate?: string | null;
  boughtDate?: string | null;
  sellDate?: string | null;
  soldDate?: string | null;
  intendedSellPrice?: number | string | null;
  changePivot?: number | null;
  threshold?: number | null;
};
