import APIBaseWrapper from './APIBaseWrapper';
import dayjs from 'dayjs';
import {withGameMode} from '../lib/game-mode';
import {handleResponseBody} from '../lib/handlers';
import type {
  GameMode,
  GraphDuration,
  GraphRequestParams,
  GraphResponse,
  GraphSource,
} from '../types';

export default class GraphWrapper extends APIBaseWrapper {
  private _mode: GameMode = 'main';

  protected _wrapGet<T>(path: string): Promise<T> {
    return this.client.get(this._wrapUrl(path)).then(handleResponseBody);
  }

  getDuration(
    duration: GraphDuration,
    itemId: number,
    source: GraphSource = null,
  ): Promise<GraphResponse> {
    let url = `graph/${itemId}/${duration}`;

    if (source !== null) {
      url = url + '?source=' + source;
    }

    return this._wrapGet(this._wrapUrl(url));
  }

  getDay(
    itemId: number,
    tenMinute: boolean = false,
    params: GraphRequestParams = {},
  ): Promise<GraphResponse> {
    if (!tenMinute) {
      const source =
        params.hasOwnProperty('source') && params.source !== null
          ? params.source
          : null;
      return this.getDuration('day', itemId, source);
    }

    const currentDate = dayjs().format('YYYY-MM-DD');

    const startDate = params.start
      ? dayjs(params.start).format('YYYY-MM-DD')
      : currentDate;
    const endDate = params.end
      ? dayjs(params.end).format('YYYY-MM-DD')
      : currentDate;

    let url = `graph/${itemId}/day?day=10&duration[start]=${startDate}&duration[end]=${endDate}`;

    if (params.hasOwnProperty('source') && params.source !== null) {
      url = url + '&source=' + params.source;
    }

    return this._wrapGet(url);
  }

  getWeek(itemId: number, source = null): Promise<GraphResponse> {
    return this.getDuration('week', itemId, source);
  }

  getMonth(itemId: number, source = null): Promise<GraphResponse> {
    return this.getDuration('month', itemId, source);
  }

  getQuarter(itemId: number, source = null): Promise<GraphResponse> {
    return this.getDuration('quarter', itemId, source);
  }

  getYear(itemId: number, source = null): Promise<GraphResponse> {
    return this.getDuration('year', itemId, source);
  }

  getAll(itemId: number, source = null): Promise<GraphResponse> {
    return this.getDuration('all', itemId, source);
  }

  getCandlestick(
    duration: GraphDuration,
    itemId: number,
  ): Promise<GraphResponse> {
    return this._wrapGet(`graph/candlestick/${itemId}/${duration}`);
  }

  getIndicators(duration: GraphDuration, itemId: number) {
    return this._wrapGet(`graph/indicators/${itemId}/${duration}`);
  }

  forceReload(duration: GraphDuration, itemId: number) {
    return this._wrapPost(this._wrapUrl(`graph/force-reload`), {
      itemId,
      duration,
    });
  }

  /** Game Mode for graph requests only; `main` uses the client's mode */
  gameMode(mode: GameMode) {
    this._mode = mode;
    return this;
  }

  /** Shortcut for `gameMode(enabled ? 'event' : 'main')` */
  dmm(enabled: boolean = true) {
    return this.gameMode(enabled ? 'event' : 'main');
  }

  _wrapUrl(path: string) {
    return withGameMode(path, this._mode);
  }
}
