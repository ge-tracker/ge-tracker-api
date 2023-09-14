export type ItemField =
    | 'approxProfit'
    | 'buyLimit'
    | 'buyPriceCurrent'
    | 'buySellRatio'
    | 'buying'
    | 'buyingQuantity'
    | 'cachedUntil'
    | 'highAlch'
    | 'icon'
    | 'id'
    | 'itemId'
    | 'lastKnownBuyTime'
    | 'lastKnownSellTime'
    | 'lowAlch'
    | 'members'
    | 'name'
    | 'overall'
    | 'sellPriceCurrent'
    | 'selling'
    | 'sellingQuantity'
    | 'slug'
    | 'updatedAt'
    | 'url';

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

export type ItemListPromise = Promise<Item[]>;
export type ItemPromise = Promise<Item>;
export type DataWrapped<T> = { data: T };
export type ItemDataWrapped = DataWrapped<Item>;
export type ItemArrayDataWrapped = DataWrapped<Item[]>;
export type ItemArrayDataWrappedWithMeta = { data: Item[]; meta: MetaCount };

export interface StatusResponse {
    status_code: number;
    message: string;
}

export type StatusResponseWithData<T> = DataWrapped<T> & StatusResponse;
export type StatusResponseWithResourceUrl = {
    resource_url: string;
} & StatusResponse;

export interface ItemListParams {
    filters?: boolean;
    perPage?: number;
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
export type GraphField =
    | 'buyingCompleted'
    | 'buyingPrice'
    | 'overallCompleted'
    | 'overallPrice'
    | 'sellingCompleted'
    | 'sellingPrice'
    | 'ts';

export type GraphResponseItem = {
    // [index in GraphField]: number;
    buyingCompleted: number;
    buyingPrice: number;
    overallCompleted: number;
    overallPrice: number;
    sellingCompleted: number;
    sellingPrice: number;
    ts: number;
};

export type GraphResponse = {
    source: GraphSource;
    data: GraphResponseItem[];
};

export type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};
