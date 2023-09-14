import APIBaseWrapper from './APIBaseWrapper';
import type { Item } from '../types';

export interface DeathsCofferItem extends Item {
    deathsCoffer: {
        cofferValue: number;
        cofferProfit: number;
        roi: number;
        limitPurchaseCost: number;
        potentialProfit: number;
    };
}

export interface FswTransferItem {
    fsw: {
        overall: number;
        selling: number;
        buying: number;
        diff: number;
        buying_quantity: number;
        selling_quantity: number;
    };
}

export default class CalculatorWrapper extends APIBaseWrapper {
    getDeathsCoffer(): Promise<DeathsCofferItem[]> {
        return this._wrapGet('deaths-coffer');
    }

    getFswTransfer(): Promise<FswTransferItem[]> {
        return this._wrapGet('fsw-transfer');
    }
}
