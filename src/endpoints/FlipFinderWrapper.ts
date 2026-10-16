import APIBaseWrapper from './APIBaseWrapper';
import type {ItemListParams, ItemListPromise, TfaItemsParams} from '../types';
import SuggestedItemsWrapper from './SuggestedItemsWrapper';
import FavouriteItemsWrapper from './FavouriteItemsWrapper';

export default class FlipFinderWrapper extends APIBaseWrapper {
  get SuggestedItems() {
    return new SuggestedItemsWrapper(this.client);
  }

  get FavouriteItems() {
    return new FavouriteItemsWrapper(this.client);
  }

  getGELimits(opts = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('ge-limits', opts));
  }

  getHighestMargins(opts: ItemListParams = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('highest-margins', opts));
  }

  getHighValueItems(): ItemListPromise {
    return this._wrapGet('high-value-items');
  }

  getHighVolume(opts = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('high-volume', opts));
  }

  getNewItems(opts = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('new-items', opts));
  }

  /** The Fractured Archive (TFA) Special Update items */
  getTfaItems(opts: TfaItemsParams = {}): ItemListPromise {
    const params = opts.newOnly ? {new_only: 1} : {};
    return this._wrapGet(this.parseOptions('tfa-items', params));
  }
}
