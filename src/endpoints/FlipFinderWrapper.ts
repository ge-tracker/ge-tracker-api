import APIBaseWrapper from './APIBaseWrapper';
import type {ItemListParams, ItemListPromise} from '../types';
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

  getHighVolume(opts = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('high-volume', opts));
  }

  getNewItems(opts = {filters: false}): ItemListPromise {
    return this._wrapGet(this.parseOptions('new-items', opts));
  }
}
