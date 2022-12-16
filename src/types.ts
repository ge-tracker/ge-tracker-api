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

export type MetaCount = { count: number };

export type ItemArray = Array<Item>;
export type ItemListPromise = Promise<ItemArray>;
export type ItemPromise = Promise<Item>;
export type ItemDataWrapped = { data: Item };
export type ItemArrayDataWrapped = { data: ItemArray };
export type ItemArrayDataWrappedWithMeta = { data: ItemArray; meta: MetaCount };

export interface ItemListFilterToggle {
    filters: boolean;
}

export type GraphDuration =
    | 'day'
    | 'week'
    | 'month'
    | 'quarter'
    | 'year'
    | 'all';
export type GraphSource = 'getracker' | 'osbuddy' | 'runelite' | null;
export type GraphDayDuration = '10' | '30';

export type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};
