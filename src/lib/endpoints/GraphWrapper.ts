import APIBaseWrapper from './APIBaseWrapper';
import { DateTime } from "luxon";
import { handleResponseBody } from "../handlers";
import { GraphDuration, GraphRequestParams, GraphSource } from "../../types";

export default class GraphWrapper extends APIBaseWrapper {
    private _dmm = false;

    _wrapGet(path: string) {
        return this.client.get(this._wrapUrl(path))
            .then(handleResponseBody)
    }

    getDuration(duration: GraphDuration, itemId: number, source: GraphSource = null) {
        let url = `graph/${itemId}/${duration}`;

        if (source !== null) {
            url = url + '?source=' + source;
        }

        return this._wrapGet(this._wrapUrl(url));
    }

    getDay(itemId: number, tenMinute: boolean = false, params: GraphRequestParams = {}) {
        if (!tenMinute) {
            const source = (params.hasOwnProperty('source') && params.source !== null) ? params.source : null;
            return this.getDuration('day', itemId, source);
        }

        const currentDate = DateTime.now().toSQLDate();

        const startDate = (params.start) ? DateTime.fromISO(params.start).toSQLDate() : currentDate;
        const endDate = (params.end) ? DateTime.fromISO(params.end).toSQLDate() : currentDate;

        let url = `graph/${itemId}/day?day=10&duration[start]=${startDate}&duration[end]=${endDate}`;

        if (params.hasOwnProperty('source') && params.source !== null) {
            url = url + '&source=' + params.source;
        }

        return this._wrapGet(url);
    }

    getWeek(itemId: number, source = null) {
        return this.getDuration('week', itemId, source);
    }

    getMonth(itemId: number, source = null) {
        return this.getDuration('month', itemId, source);
    }

    getQuarter(itemId: number, source = null) {
        return this.getDuration('quarter', itemId, source);
    }

    getYear(itemId: number, source = null) {
        return this.getDuration('year', itemId, source);
    }

    getAll(itemId: number, source = null) {
        return this.getDuration('all', itemId, source);
    }

    getCandlestick(duration: GraphDuration, itemId: number) {
        return this._wrapGet(`graph/candlestick/${itemId}/${duration}`);
    }

    getIndicators(duration: GraphDuration, itemId: number) {
        return this._wrapGet(`graph/indicators/${itemId}/${duration}`);
    }

    forceReload(duration: GraphDuration, itemId: number) {
        return this._wrapPost(`graph/force-reload`, {
            itemId,
            duration
        });
    }

    dmm(enabled: boolean = true) {
        this._dmm = enabled;
        return this;
    }

    /**
     * Wrap URLs to support DMM endpoints
     *
     * @param path
     */
    _wrapUrl(path: string) {
        if (!this._dmm || path.includes('dmm=1')) {
            return path;
        }

        return path.includes('?')
            ? path + '&dmm=1'
            : path + '?dmm=1';
    }
}
