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

export type ItemArray = Array<Item>;
export type ItemListPromise = Promise<ItemArray>;
export type ItemPromise = Promise<Item>;

export interface ItemListFilterToggle {
    filters: boolean;
}
