import * as Endpoint from "./lib/endpoints";

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

export type GraphDuration = 'day' | 'week' | 'month' | 'quarter' | 'year';
export type GraphSource = 'getracker' | 'osbuddy' | 'runelite' | null;
export type GraphDayDuration = '10' | '30';

export type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};

export interface GeTrackerApi {
    APIUptime: Endpoint.APIUptimeWrapper,
    Auth: Endpoint.AuthWrapper,
    BarrowsRepair: Endpoint.BarrowsRepairWrapper,
    Billing: Endpoint.BillingWrapper,
    BlastFurnace: Endpoint.BlastFurnaceWrapper,
    CombinationItems: Endpoint.CombinationItemsWrapper,
    Dashboard: Endpoint.DashboardWrapper,
    DecantPotions: Endpoint.DecantPotionsWrapper,
    Device: Endpoint.DeviceWrapper,
    FavouriteItems: Endpoint.FavouriteItemsWrapper,
    GELimits: Endpoint.GELimitsWrapper,
    Graphs: Endpoint.GraphWrapper,
    Heartbeat: Endpoint.HeartbeatWrapper,
    Herblore: Endpoint.HerbloreWrapper,
    HighAlchemy: Endpoint.HighAlchemyWrapper,
    HighVolume: Endpoint.HighVolumeWrapper,
    HighestMargins: Endpoint.HighestMarginsWrapper,
    ItemSets: Endpoint.ItemSetsWrapper,
    Items: Endpoint.ItemsWrapper,
    Leaderboard: Endpoint.LeaderboardWrapper,
    MagicTablets: Endpoint.MagicTabletsWrapper,
    MarketWatch: Endpoint.MarketWatchWrapper,
    NewItems: Endpoint.NewItemsWrapper,
    Notifications: Endpoint.NotificationsWrapper,
    PriceAlert: Endpoint.PriceAlertWrapper,
    ProfitTracker: Endpoint.ProfitTrackerWrapper,
    PlankMaking: Endpoint.PlankMakingWrapper,
    RSUpdates: Endpoint.RSUpdatesWrapper,
    Stats: Endpoint.StatsWrapper,
    StoreProfit: Endpoint.StoreProfitWrapper,
    Subscriptions: Endpoint.SubscriptionsWrapper,
    SuggestedItems: Endpoint.SuggestedItemsWrapper,
    TanLeather: Endpoint.TanLeatherWrapper,
    TreeSapling: Endpoint.TreeSaplingWrapper,
    Users: Endpoint.UserWrapper,
    getManifest: Function,
    attachOnRequest: Function,
    getClient: Function,
}
