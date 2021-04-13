export interface Item {
    approxProfit: number;
    buyLimit: number;
    buyPriceCurrent: boolean;
    buySellRatio: number;
    buying: number;
    buyingQuantity: number;
    cachedUntil: string;
    highAlch: number;
    icon: string;
    id: number;
    itemId: number;
    lastKnownBuyTime: string;
    lastKnownSellTime: string;
    lowAlch: number;
    members: boolean;
    name: string;
    overall: number;
    sellPriceCurrent: boolean;
    selling: number;
    sellingQuantity: number;
    slug: string;
    updatedAt: string;
    url: string;
}
export declare type ItemArray = Array<Item>;
export declare type ItemListPromise = Promise<ItemArray>;
export declare type ItemPromise = Promise<Item>;
export interface ItemListFilterToggle {
    filters: boolean;
}
export declare type GraphDuration = 'day' | 'week' | 'month' | 'quarter' | 'year';
export declare type GraphSource = 'getracker' | 'osbuddy' | 'runelite' | null;
export declare type GraphDayDuration = '10' | '30';
export declare type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};
//# sourceMappingURL=types.d.ts.map