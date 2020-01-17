import APIBaseWrapper from './APIBaseWrapper';

export default class LeaderboardWrapper extends APIBaseWrapper {
    getLeaderboard(slug, opts = {}) {
        return this.client.get(this.parseOptions(`leaderboard/${slug}`, opts))
            .then(({data}) => data);
    }

    getSummary() {
        return this._wrapGet('leaderboard');
    }
}
