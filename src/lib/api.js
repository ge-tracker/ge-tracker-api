import * as Endpoint from './endpoints'
import { AxiosStatic } from "axios";

const createApi = (client, bugsnag = null) => {
    return {
        APIUptime: new Endpoint.APIUptimeWrapper(client, bugsnag),
        BarrowsRepair: new Endpoint.BarrowsRepairWrapper(client, bugsnag),
        BlastFurnace: new Endpoint.BlastFurnaceWrapper(client, bugsnag),
        Dashboard: new Endpoint.DashboardWrapper(client, bugsnag),
        DecantPotions: new Endpoint.DecantPotionsWrapper(client, bugsnag),
        FavouriteItems: new Endpoint.FavouriteItemsWrapper(client, bugsnag),
        GELimits: new Endpoint.GELimitsWrapper(client, bugsnag),
        Graphs: new Endpoint.GraphWrapper(client, bugsnag),
        Heartbeat: new Endpoint.HeartbeatWrapper(client, bugsnag),
        Herblore: new Endpoint.HerbloreWrapper(client, bugsnag),
        HighAlchemy: new Endpoint.HighAlchemyWrapper(client, bugsnag),
        HighVolume: new Endpoint.HighVolumeWrapper(client, bugsnag),
        HighestMargins: new Endpoint.HighestMarginsWrapper(client, bugsnag),
        ItemSets: new Endpoint.ItemSetsWrapper(client, bugsnag),
        Items: new Endpoint.ItemsWrapper(client, bugsnag),
        Leaderboard: new Endpoint.LeaderboardWrapper(client, bugsnag),
        MagicTablets: new Endpoint.MagicTabletsWrapper(client, bugsnag),
        MarketWatch: new Endpoint.MarketWatchWrapper(client, bugsnag),
        NewItems: new Endpoint.NewItemsWrapper(client, bugsnag),
        Notifications: new Endpoint.NotificationsWrapper(client, bugsnag),
        PriceAlert: new Endpoint.PriceAlertWrapper(client, bugsnag),
        ProfitTracker: new Endpoint.ProfitTrackerWrapper(client, bugsnag),
        PlankMaking: new Endpoint.PlankMakingWrapper(client, bugsnag),
        RSUpdates: new Endpoint.RSUpdatesWrapper(client, bugsnag),
        Stats: new Endpoint.StatsWrapper(client, bugsnag),
        StoreProfit: new Endpoint.StoreProfitWrapper(client, bugsnag),
        SuggestedItems: new Endpoint.SuggestedItemsWrapper(client, bugsnag),
        TanLeather: new Endpoint.TanLeatherWrapper(client, bugsnag),
        TreeSapling: new Endpoint.TreeSaplingWrapper(client, bugsnag),
        Users: new Endpoint.UserWrapper(client, bugsnag),

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
