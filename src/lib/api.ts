import * as Endpoint from '../endpoints';
import APIBaseWrapper from '../endpoints/APIBaseWrapper';
import { CustomAxiosInstance } from './client';

export interface GeTrackerApi {
    ActiveItems: Endpoint.ActiveItemsWrapper;
    APIUptime: Endpoint.APIUptimeWrapper;
    Auth: Endpoint.AuthWrapper;
    BarrowsRepair: Endpoint.BarrowsRepairWrapper;
    Billing: Endpoint.BillingWrapper;
    CombinationItems: Endpoint.CombinationItemsWrapper;
    CraftingSmithing: Endpoint.CraftingSmithingWrapper;
    Dashboard: Endpoint.DashboardWrapper;
    DecantPotions: Endpoint.DecantPotionsWrapper;
    Device: Endpoint.DeviceWrapper;
    FavouriteItems: Endpoint.FavouriteItemsWrapper;
    Fletching: Endpoint.FletchingWrapper;
    GELimits: Endpoint.GELimitsWrapper;
    Graphs: Endpoint.GraphWrapper;
    Heartbeat: Endpoint.HeartbeatWrapper;
    Herblore: Endpoint.HerbloreWrapper;
    HighVolume: Endpoint.HighVolumeWrapper;
    HighestMargins: Endpoint.HighestMarginsWrapper;
    ItemSets: Endpoint.ItemSetsWrapper;
    Items: Endpoint.ItemsWrapper;
    Leaderboard: Endpoint.LeaderboardWrapper;
    Magic: Endpoint.MagicWrapper;
    MarketWatch: Endpoint.MarketWatchWrapper;
    NewItems: Endpoint.NewItemsWrapper;
    Notifications: Endpoint.NotificationsWrapper;
    PriceAlert: Endpoint.PriceAlertWrapper;
    ProfitTracker: Endpoint.ProfitTrackerWrapper;
    RSUpdates: Endpoint.RSUpdatesWrapper;
    Stats: Endpoint.StatsWrapper;
    StoreProfit: Endpoint.StoreProfitWrapper;
    Subscriptions: Endpoint.SubscriptionsWrapper;
    SuggestedItems: Endpoint.SuggestedItemsWrapper;
    Tags: Endpoint.TagWrapper;
    TradingPost: Endpoint.TradingPostWrapper;
    Users: Endpoint.UserWrapper;
    getManifest: Function;
    attachOnRequest: Function;
    getClient: Function;
    dmm: Function;
}

const createApi = (client: CustomAxiosInstance): GeTrackerApi => {
    return {
        ActiveItems: new Endpoint.ActiveItemsWrapper(client),
        APIUptime: new Endpoint.APIUptimeWrapper(client),
        Auth: new Endpoint.AuthWrapper(client),
        BarrowsRepair: new Endpoint.BarrowsRepairWrapper(client),
        Billing: new Endpoint.BillingWrapper(client),
        CombinationItems: new Endpoint.CombinationItemsWrapper(client),
        CraftingSmithing: new Endpoint.CraftingSmithingWrapper(client),
        Dashboard: new Endpoint.DashboardWrapper(client),
        DecantPotions: new Endpoint.DecantPotionsWrapper(client),
        Device: new Endpoint.DeviceWrapper(client),
        FavouriteItems: new Endpoint.FavouriteItemsWrapper(client),
        Fletching: new Endpoint.FletchingWrapper(client),
        GELimits: new Endpoint.GELimitsWrapper(client),
        Graphs: new Endpoint.GraphWrapper(client),
        Heartbeat: new Endpoint.HeartbeatWrapper(client),
        Herblore: new Endpoint.HerbloreWrapper(client),
        HighVolume: new Endpoint.HighVolumeWrapper(client),
        HighestMargins: new Endpoint.HighestMarginsWrapper(client),
        ItemSets: new Endpoint.ItemSetsWrapper(client),
        Items: new Endpoint.ItemsWrapper(client),
        Leaderboard: new Endpoint.LeaderboardWrapper(client),
        Magic: new Endpoint.MagicWrapper(client),
        MarketWatch: new Endpoint.MarketWatchWrapper(client),
        NewItems: new Endpoint.NewItemsWrapper(client),
        Notifications: new Endpoint.NotificationsWrapper(client),
        PriceAlert: new Endpoint.PriceAlertWrapper(client),
        ProfitTracker: new Endpoint.ProfitTrackerWrapper(client),
        RSUpdates: new Endpoint.RSUpdatesWrapper(client),
        Stats: new Endpoint.StatsWrapper(client),
        StoreProfit: new Endpoint.StoreProfitWrapper(client),
        Subscriptions: new Endpoint.SubscriptionsWrapper(client),
        SuggestedItems: new Endpoint.SuggestedItemsWrapper(client),
        Tags: new Endpoint.TagWrapper(client),
        TradingPost: new Endpoint.TradingPostWrapper(client),
        Users: new Endpoint.UserWrapper(client),

        /**
         * Get GT App Manifest JSON
         *
         * @return {Promise<any>}
         */
        getManifest(): Promise<any> {
            // @ts-ignore
            const apiUrl = client.defaults.baseURL.replace('/api', '');
            return new Promise((resolve, reject) => {
                client
                    .get(`${apiUrl}app_manifest.json`)
                    .then((data) => {
                        if (data.hasOwnProperty('data')) {
                            resolve(data.data);
                        } else {
                            reject(null);
                        }
                    })
                    .catch((err) => reject(err));
            });
        },

        /**
         * Attach a callback to each request.
         *
         * Used for error logging via Bugsnag or Sentry
         *
         * `callback` will be called with 3 parameters: `method`, `path`, `params`
         *
         * @param {Function} callback
         */
        attachOnRequest(callback: Function): void {
            APIBaseWrapper.onRequestCb = callback;
        },

        /**
         * Get underlying Axios client instance
         */
        getClient(): CustomAxiosInstance {
            return client;
        },

        dmm(enabled: boolean = true): void {
            client.dmm(enabled);
        },
    };
};

export { createApi };
