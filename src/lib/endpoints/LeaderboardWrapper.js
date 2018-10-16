import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class LeaderboardWrapper extends APIBaseWrapper {
    getLeaderboard(slug) {
        return this._wrapGet(`leaderboard/${slug}`);
    }

    getSummary() {
        return this._wrapGet('leaderboard');
    }
}