import {handleResponseBody} from "../api";

export default class LeaderboardWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getLeaderboard(slug) {
        return this._wrapGet(`leaderboard/${slug}`);
    }

    getSummary() {
        return this._wrapGet('leaderboard');
    }
}