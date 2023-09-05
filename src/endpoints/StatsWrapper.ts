import APIBaseWrapper from './APIBaseWrapper';
import type { Item } from '../types';
import type { UserClass } from './UserWrapper';
import { handleResponseBody } from '../lib/handlers';

export interface PopularItem {
    item: Item;
    views: number;
}

export interface StatsResponse {
    totalProfit: number;
    avgProfit: number;
    totalTransactions: number;
    totalItems: number;
    usersActive: number;
    usersOnline: number;
    users: {
        accountsOnline: number;
        premiumUsersOnline: number;
        standardUsersOnline: number;
        trialUsersOnline: number;
        registeredUsers: number;
    };
    popularItems: PopularItem[];
}

interface OnlineUser {
    name: string;
    slug: string;
    class: UserClass;
}

export type OnlineUsers = Record<UserClass, OnlineUser[]>;

export interface OnlineUsersResponse {
    onlineCount: {
        usersOnline: number;
        premium: number;
        standard: number;
        trial: number;
        guest: number;
        registeredUsers: number;
    };
    users: OnlineUsers;
}

export default class StatsWrapper extends APIBaseWrapper {
    getGlobalStats(): Promise<StatsResponse> {
        return new Promise(async (resolve) => {
            const data = await this._wrapGet<StatsResponse>('stats');

            // Remove the `data` property from the item's response
            data.popularItems = data.popularItems.map((item) => ({
                views: item.views,
                item: handleResponseBody(item.item),
            }));

            resolve(data);
        });
    }

    getOnlineUsers(): Promise<OnlineUsersResponse> {
        return this._wrapGet('stats/online');
    }
}
