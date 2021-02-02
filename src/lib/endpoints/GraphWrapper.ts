import APIBaseWrapper from './APIBaseWrapper';
import moment from 'moment';
import {handleResponseBody} from "../handlers";

export type GraphDuration = 'day' | 'week' | 'month' | 'quarter' | 'year';
export type GraphSource = 'getracker' | 'osbuddy' | null;
export type GraphDayDuration = '10' | '30';

export type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};

export default class GraphWrapper extends APIBaseWrapper {
    _wrapGet(path: string) {
        return this.client.get(path)
            .then(handleResponseBody)
    }

    getDuration(duration: GraphDuration, itemId: number, source: GraphSource = null) {
        let url = `graph/${itemId}/${duration}`;

        if (source !== null) {
            url = url + '?source=' + source;
        }

        return this._wrapGet(url);
    }

    getDay(itemId: number, tenMinute: boolean = false, params: GraphRequestParams = {}) {
        if (tenMinute) {

            const dateFormat = 'Y-MM-DD';
            const date = moment().format(dateFormat);

            const startDate = (params.hasOwnProperty('start')) ? moment(params.start).format(dateFormat) : date;
            const endDate = (params.hasOwnProperty('end')) ? moment(params.end).format(dateFormat) : date;

            let url = `graph/${itemId}/day?day=10&duration[start]=${startDate}&duration[end]=${endDate}`;

            if (params.hasOwnProperty('source') && params.source !== null) {
                url = url + '&source=' + params.source;
            }

            return this._wrapGet(url);

        } else {

            const source = (params.hasOwnProperty('source') && params.source !== null) ? params.source : null;
            return this.getDuration('day', itemId, source);

        }
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

    getCandlestick(duration: GraphDuration, itemId: number) {
        return this._wrapGet(`graph/candlestick/${itemId}/${duration}`);
    }

    forceReload(duration: GraphDuration, itemId: number) {
        return this._wrapPost(`graph/force-reload`, {
            itemId,
            duration
        });
    }
}
