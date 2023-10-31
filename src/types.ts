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
  tax: number;
  updatedAt: string;
  url: string;
  wikiUrl: string;
}

export type MetaCount = {count: number};

export type ItemListPromise<T = Item> = Promise<T[]>;
export type ItemPromise<T = Item> = Promise<T>;
export type DataWrapped<T> = {data: T};
export type DataWrappedWithMeta<T = Item, M = MetaCount> = {data: T[]; meta: M};
export type ItemDataWrapped = DataWrapped<Item>;
export type ItemArrayDataWrapped = DataWrapped<Item[]>;

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
  buyingCompleted: number;
  buyingPrice: number;
  overallCompleted: number;
  overallPrice: number;
  sellingCompleted: number;
  sellingPrice: number;
  ts: number;
};

export type GraphResponse<T = GraphResponseItem> = {
  source: GraphSource;
  data: T[];
};

export type GraphResponseWithError<T = GraphResponseItem> = GraphResponse<T> & {
  status?: 'error';
};

export type GraphRequestParams = {
  source?: GraphSource;
  day?: GraphDayDuration;
  start?: string;
  end?: string;
};

/**
 * Used on the current (legacy) GE Tracker website
 */
type LegacyPaginationMeta = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: {
    next: string;
    previous: string;
  };
};

/**
 * Used in GE Tracker NG (API v2+)
 */
type PaginationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationMetaLinks[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

type PaginationMetaLinks = {
  url: string | null;
  label: string;
  active: boolean;
};

type PaginationLinks = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export type LegacyPaginated = {
  meta: {
    pagination: LegacyPaginationMeta;
  };
};

export type Paginated = {
  meta: PaginationMeta;
  links: PaginationLinks;
};

/**
 * The `data` property contains a list of items `T`.
 *
 * Pagination type defaults to v1 (legacy) pagination.
 */
export type PaginatedResponse<T, PaginationType = LegacyPaginated> = {
  data: T[];
} & PaginationType;

export type MaybePromise<T> = T | Promise<T>;
