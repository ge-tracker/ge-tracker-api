import APIBaseWrapper from './APIBaseWrapper';

export type LeaderboardSlug = 'global' | 'monthly' | 'weekly' | 'daily';

export default class LeaderboardWrapper extends APIBaseWrapper {
    getLeaderboard(slug: LeaderboardSlug, opts = {}) {
        return this.client.get(this.parseOptions(`leaderboard/${slug}`, opts))
            .then(({data}) => data);
    }

    getRank(slug: LeaderboardSlug) {
        return this._wrapGet(`leaderboard/rank/${slug}`);
    }

    getSummary() {
        return this._wrapGet('leaderboard');
    }
}
