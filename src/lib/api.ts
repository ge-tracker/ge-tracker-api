import * as Endpoint from './endpoints'
import {AxiosInstance} from 'axios';
import APIBaseWrapper from "./endpoints/APIBaseWrapper";

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

const createApi = (client: AxiosInstance): GeTrackerApi => {
    return {
        APIUptime: new Endpoint.APIUptimeWrapper(client),
        Auth: new Endpoint.AuthWrapper(client),
        BarrowsRepair: new Endpoint.BarrowsRepairWrapper(client),
        Billing: new Endpoint.BillingWrapper(client),
        BlastFurnace: new Endpoint.BlastFurnaceWrapper(client),
        CombinationItems: new Endpoint.CombinationItemsWrapper(client),
        Dashboard: new Endpoint.DashboardWrapper(client),
        DecantPotions: new Endpoint.DecantPotionsWrapper(client),
        Device: new Endpoint.DeviceWrapper(client),
        FavouriteItems: new Endpoint.FavouriteItemsWrapper(client),
        GELimits: new Endpoint.GELimitsWrapper(client),
        Graphs: new Endpoint.GraphWrapper(client),
        Heartbeat: new Endpoint.HeartbeatWrapper(client),
        Herblore: new Endpoint.HerbloreWrapper(client),
        HighAlchemy: new Endpoint.HighAlchemyWrapper(client),
        HighVolume: new Endpoint.HighVolumeWrapper(client),
        HighestMargins: new Endpoint.HighestMarginsWrapper(client),
        ItemSets: new Endpoint.ItemSetsWrapper(client),
        Items: new Endpoint.ItemsWrapper(client),
        Leaderboard: new Endpoint.LeaderboardWrapper(client),
        MagicTablets: new Endpoint.MagicTabletsWrapper(client),
        MarketWatch: new Endpoint.MarketWatchWrapper(client),
        NewItems: new Endpoint.NewItemsWrapper(client),
        Notifications: new Endpoint.NotificationsWrapper(client),
        PriceAlert: new Endpoint.PriceAlertWrapper(client),
        ProfitTracker: new Endpoint.ProfitTrackerWrapper(client),
        PlankMaking: new Endpoint.PlankMakingWrapper(client),
        RSUpdates: new Endpoint.RSUpdatesWrapper(client),
        Stats: new Endpoint.StatsWrapper(client),
        StoreProfit: new Endpoint.StoreProfitWrapper(client),
        Subscriptions: new Endpoint.SubscriptionsWrapper(client),
        SuggestedItems: new Endpoint.SuggestedItemsWrapper(client),
        TanLeather: new Endpoint.TanLeatherWrapper(client),
        TreeSapling: new Endpoint.TreeSaplingWrapper(client),
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
                client.get(`${apiUrl}app_manifest.json`).then(data => {

                    if (data.hasOwnProperty('data')) {
                        resolve(data.data);
                    } else {
                        reject(null);
                    }

                }).catch(err => reject(err));
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
        getClient(): AxiosInstance {
            return client;
        },
    }
};

export {
    createApi
}
