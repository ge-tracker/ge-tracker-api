import * as Endpoint from '../endpoints';
import APIBaseWrapper from '../endpoints/APIBaseWrapper';
import { GeTrackerAxios } from './client';

export interface GeTrackerApi {
    APIUptime: Endpoint.APIUptimeWrapper;
    BarrowsRepair: Endpoint.BarrowsRepairWrapper;
    CombinationItems: Endpoint.CombinationItemsWrapper;
    CraftingSmithing: Endpoint.CraftingSmithingWrapper;
    Dashboard: Endpoint.DashboardWrapper;
    DecantPotions: Endpoint.DecantPotionsWrapper;
    FavouriteItems: Endpoint.FavouriteItemsWrapper;
    Fletching: Endpoint.FletchingWrapper;
    GELimits: Endpoint.GELimitsWrapper;
    Graphs: Endpoint.GraphWrapper;
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
    SuggestedItems: Endpoint.SuggestedItemsWrapper;
    Tags: Endpoint.TagWrapper;
    Users: Endpoint.UserWrapper;
    getManifest: () => Promise<any>;
    attachOnRequest: (callback: Function) => void;
    getClient: () => GeTrackerAxios;
    dmm: (enabled: boolean) => void;
}

const createApi = (client: GeTrackerAxios): GeTrackerApi => {
    return {
        APIUptime: new Endpoint.APIUptimeWrapper(client),
        BarrowsRepair: new Endpoint.BarrowsRepairWrapper(client),
        CombinationItems: new Endpoint.CombinationItemsWrapper(client),
        CraftingSmithing: new Endpoint.CraftingSmithingWrapper(client),
        Dashboard: new Endpoint.DashboardWrapper(client),
        DecantPotions: new Endpoint.DecantPotionsWrapper(client),
        FavouriteItems: new Endpoint.FavouriteItemsWrapper(client),
        Fletching: new Endpoint.FletchingWrapper(client),
        GELimits: new Endpoint.GELimitsWrapper(client),
        Graphs: new Endpoint.GraphWrapper(client),
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
        SuggestedItems: new Endpoint.SuggestedItemsWrapper(client),
        Tags: new Endpoint.TagWrapper(client),
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
        getClient(): GeTrackerAxios {
            return client;
        },

        dmm(enabled: boolean = true): void {
            client.dmm(enabled);
        },
    };
};

export { createApi };
