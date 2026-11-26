import APIBaseWrapper from './APIBaseWrapper';

/** `:write` also grants its `:read`; `'*'` is a Full Access API Key */
export type ApiKeyAbility =
  | 'flipping:read'
  | 'flipping:write'
  | 'price-alerts:read'
  | 'price-alerts:write'
  | 'account:read'
  | 'account:write'
  | 'staff:read'
  | 'staff:write'
  | '*';

export type ApiKeyKind = 'external' | 'app' | 'internal';

/** A session caller gets `abilities: ['*']` and nulls elsewhere */
export type ApiKeyInfo = {
  name: string | null;
  kind: ApiKeyKind | null;
  abilities: ApiKeyAbility[];
  /** UTC, `Y-m-d H:i:s` */
  createdAt: string | null;
};

export default class ApiKeyWrapper extends APIBaseWrapper {
  /** Get the calling API Key's name, kind and abilities; needs no ability */
  get(): Promise<ApiKeyInfo> {
    return this._wrapGet('/api-key');
  }
}
