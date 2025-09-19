import APIBaseWrapper from './APIBaseWrapper';
import type {DataWrapped, Item, StatusResponse} from '../types';

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

export default class PriceAlertWrapper extends APIBaseWrapper {
  /**
   * Get Price Alerts
   *
   * `itemId` can be specified to load price alerts for a single item
   *
   * @param {Number} itemId
   * @return {*}
   */
  getAlerts(itemId = null): Promise<PriceAlert[]> {
    const url = itemId ? `/price-alerts/${itemId}` : '/price-alerts';
    return this._wrapGet(url);
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
