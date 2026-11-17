import APIBaseWrapper from './APIBaseWrapper';
import {ALL_MODES_PARAMS} from '../lib/game-mode';
import type {
  DataWrapped,
  DataWrappedWithMeta,
  GameMode,
  Item,
  StatusResponse,
} from '../types';

export type PriceAlertField = 'current' | 'selling' | 'buying' | 'profit';
export type PriceAlertType = 'above' | 'below';
export type PriceAlertMethod = {
  sms?: boolean;
  email?: boolean;
  app?: boolean;
};
export type PriceAlertState = 'active' | 'pending' | 'completed';

export type PriceAlert = {
  id: number;
  mode: GameMode;
  methods: Required<PriceAlertMethod>;
  alert: {
    type: PriceAlertType;
    field: PriceAlertField;
    pivot: number;
  };
  trigger: {
    times: number;
    max: number;
    unlimited: boolean;
  };
  state: 'active';
  notified: number;
  createdAt: string | null;
  triggeredAt: string | null;
  item: DataWrapped<Item>;
};

/** A `meta.modes` entry; `available: false` means its alerts aren't checked */
export type ListedGameMode = {
  mode: GameMode;
  title: string;
  available: boolean;
};

export type AllModesPriceAlerts = DataWrappedWithMeta<
  PriceAlert,
  {modes: ListedGameMode[]}
>;

export default class PriceAlertWrapper extends APIBaseWrapper {
  /**
   * Get Price Alerts in the client's Game Mode, optionally for a single item
   */
  getAlerts(itemId?: number | null): Promise<PriceAlert[]>;
  /**
   * Get every Game Mode's Price Alerts, whatever `gameMode()` holds, with
   * `meta.modes` listing each Game Mode
   */
  getAlerts(opts: {allModes: true}): Promise<AllModesPriceAlerts>;
  getAlerts(
    arg: number | null | {allModes: true} = null,
  ): Promise<PriceAlert[] | AllModesPriceAlerts> {
    if (typeof arg === 'object' && arg?.allModes) {
      const url = this.parseOptions('/price-alerts', ALL_MODES_PARAMS);
      this.onRequest('GET', url);
      return this.client.get(url).then(({data}) => data);
    }

    const itemId = typeof arg === 'object' ? null : arg;
    return this._wrapGet(itemId ? `/price-alerts/${itemId}` : '/price-alerts');
  }

  /**
   * Create Price Alert
   *
   * @return {*}
   */
  createAlert(
    itemId: number,
    field: PriceAlertField,
    type: PriceAlertType,
    price: number,
    methods: PriceAlertMethod = {},
    maxTriggers: number = 10,
  ): Promise<StatusResponse> {
    return this._wrapPost('/price-alerts', {
      itemId,
      field,
      type,
      price,
      methods,
      maxTriggers,
    });
  }

  updateAlert(
    id: number,
    status: string,
    params = {},
  ): Promise<StatusResponse> {
    return this._wrapPost(`/price-alerts/${id}`, {
      status,
      ...params,
    });
  }

  deleteAlert(id: number): Promise<StatusResponse> {
    return this._wrapDelete(`/price-alerts/${id}`);
  }
}
