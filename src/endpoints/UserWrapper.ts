import APIBaseWrapper from './APIBaseWrapper';

export type UserPremium = {
    premium: boolean;
    trial: boolean;
    view: boolean;
};

export type UserPermissions = {
    moderator: string;
    staff: string;
    admin: string;
    disabled: string;
};

export type UserClass =
    | 'admin'
    | 'staff'
    | 'moderator'
    | 'high-roller'
    | 'youtube'
    | 'twitch'
    | 'affiliate'
    | 'discord'
    | 'premium'
    | 'standard'
    | 'trial'
    | string;

export type User = {
    userId: string;
    name: string;
    email: string;
    totalProfit: number;
    registeredOn: Date;
    emailVerified: boolean;
    profilePic: string;
    slug: string;
    apiKey: string;
    url: string;
    class: UserClass;
    premium: UserPremium;
    permissions: UserPermissions;
    avatars: Array<string>;
};

export default class UserWrapper extends APIBaseWrapper {
    getById(userId: string): Promise<Array<User>> {
        return this._wrapGet(`users/${userId}`);
    }

    search(query: string): Promise<Array<User>> {
        return this._wrapPost(`users/search`, {
            query,
        });
    }

    getAuthenticateUser(): Promise<User> {
        return this._wrapGet('users/me');
    }
}
