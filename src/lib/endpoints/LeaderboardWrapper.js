import APIBaseWrapper from './APIBaseWrapper';

export default class LeaderboardWrapper extends APIBaseWrapper {
    getLeaderboard(slug, opts = {}) {
        return this._wrapGet(this.parseOptions(`leaderboard/${slug}`, opts));
    }

    getSummary() {
        return this._wrapGet('leaderboard');
    }
}
