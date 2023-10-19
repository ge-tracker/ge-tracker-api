import APIBaseWrapper from './APIBaseWrapper';
import type {DataWrappedWithMeta, ItemDataWrapped} from '../types';

export type DashboardTotal = {
  invested: number;
  profit: number;
  revenue: number;
  sales: number;
};

export type DashboardTiles = {
  activeTransactions: number;
  mostFrequent: {item: ItemDataWrapped | null; qty: number};
  mostProfit: {item: ItemDataWrapped | null; gp: number};
  mostSold: {item: ItemDataWrapped | null; qty: number};
  total: DashboardTotal;
};

export type Dashboard = {
  favouriteItems: DataWrappedWithMeta;
  suggestedItems: DataWrappedWithMeta;
  tiles: {
    data: DashboardTiles;
  };
};

export default class DashboardWrapper extends APIBaseWrapper {
  getDashboard(): Promise<Dashboard> {
    return this._wrapGet('/dashboard');
  }
}
