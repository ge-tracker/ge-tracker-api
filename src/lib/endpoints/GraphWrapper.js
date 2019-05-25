import APIBaseWrapper from './APIBaseWrapper';
import moment from 'moment';
import { handleResponseBody } from "../handlers";

export default class GraphWrapper extends APIBaseWrapper {
    _wrapGet(path) {
        return this.client.get(path)
            .then(handleResponseBody)
    }

    getDuration(duration, itemId, source = null) {
        let url = `graph/${itemId}/${duration}`;

        if (source !== null) {
            url = url + '?source=' + source;
        }

        return this._wrapGet(url);
    }

    getDay(itemId, tenMinute = false, params = {}) {
        if (tenMinute) {

            const dateFormat = 'Y-MM-DD';
            const date = moment().format(dateFormat);

            const startDate = (params.hasOwnProperty('start')) ? moment(params.start).format(dateFormat) : date;
            const endDate = (params.hasOwnProperty('end')) ? moment(params.end).format(dateFormat) : date;

            let url = `graph/${itemId}/day?day=10&duration[start]=${startDate}&duration[end]=${endDate}`;

            if (params.hasOwnProperty('source') && params.source !== null) {
                url = url + '&source=' + source;
            }

            return this._wrapGet(url);

        } else {

            const source = (params.hasOwnProperty('source') && params.source !== null) ? params.source : null;
            return this.getDuration('day', itemId, source);

        }
    }

    getWeek(itemId, source = null) {
        return this.getDuration('week', itemId, source);
    }

    getMonth(itemId, source = null) {
        return this.getDuration('month', itemId, source);
    }

    getQuarter(itemId, source = null) {
        return this.getDuration('quarter', itemId, source);
    }

    getYear(itemId, source = null) {
        return this.getDuration('year', itemId, source);
    }

    getCandlestick(duration, itemId) {
        return this._wrapGet(`graph/candlestick/${itemId}/${duration}`);
    }

    forceReload(duration, itemId) {
        return this._wrapPost(`graph/force-reload`, {
            itemId,
            duration
        });
    }
}
