import * as Endpoint from './endpoints'
import { AxiosStatic } from 'axios';
import APIBaseWrapper from "./endpoints/APIBaseWrapper";

const createApi = (client) => {
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
         * @param url
         * @return {Promise<any>}
         */
        getManifest(url = null) {
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
        attachOnRequest(callback) {
            APIBaseWrapper.onRequestCb = callback;
        },

        /**
         * Get underlying Axios client instance
         *
         * @returns {AxiosStatic}
         */
        getClient() {
            return client;
        },
    }
};

export {
    createApi
}
