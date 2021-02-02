import APIBaseWrapper from './APIBaseWrapper';
export declare type LeaderboardSlug = 'global' | 'monthly' | 'weekly' | 'daily';
export default class LeaderboardWrapper extends APIBaseWrapper {
    getLeaderboard(slug: LeaderboardSlug, opts?: {}): Promise<any>;
    getRank(slug: LeaderboardSlug): Promise<any>;
    getSummary(): Promise<any>;
}
