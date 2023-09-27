import APIBaseWrapper from './APIBaseWrapper';
import type {PaginatedResponse} from '../types';

export type DaysOption = number | 'all';

type RsUpdateOptions = {
  days?: DaysOption;
};

export type RsUpdate = {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  createdAt: string;
};

export default class RSUpdatesWrapper extends APIBaseWrapper {
  get(opts: RsUpdateOptions = {}): Promise<PaginatedResponse<RsUpdate>> {
    return this.client
      .get(this.parseOptions('rs-updates', opts))
      .then(({data}) => data);
  }

  getUpdate(id: number) {
    return this._wrapGet(`rs-updates/${id}`);
  }
}
