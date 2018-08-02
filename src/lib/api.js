import * as Endpoint from './endpoints'
import {GE_TRACKER_API_URL} from "./client";

const createApi = (client) => {
    return {
        Auth: new Endpoint.AuthWrapper(client),
        BarrowsRepair: new Endpoint.BarrowsRepairWrapper(client),
        Dashboard: new Endpoint.DashboardWrapper(client),
        DecantPotions: new Endpoint.DecantPotionsWrapper(client),
        Device: new Endpoint.DeviceWrapper(client),
        FavouriteItems: new Endpoint.FavouriteItemsWrapper(client),
        GELimits: new Endpoint.GELimitsWrapper(client),
        Graphs: new Endpoint.GraphWrapper(client),
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
        ProfitTracker: new Endpoint.ProfitTrackerWrapper(client),
        PlankMaking: new Endpoint.PlankMakingWrapper(client),
        RSUpdates: new Endpoint.RSUpdatesWrapper(client),
        Stats: new Endpoint.StatsWrapper(client),
        StoreProfit: new Endpoint.StoreProfitWrapper(client),
        SuggestedItems: new Endpoint.SuggestedItemsWrapper(client),
        TanLeather: new Endpoint.TanLeatherWrapper(client),
        Users: new Endpoint.UserWrapper(client),

        /**
         * Get GT App Manifest JSON
         *
         * @return {PromiseLike<T>}
         */
        getManifest(url = null) {
            const apiUrl = client.defaults.baseURL.replace('/api', '');
            return client.get(`${apiUrl}app_manifest.json`).then(({data}) => data.data);
        }
    }
};

export {
    createApi
}