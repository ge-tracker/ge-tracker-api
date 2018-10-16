import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";
import moment from 'moment';

export default class GraphWrapper extends APIBaseWrapper {
    getDuration(duration, itemId) {
        return this._wrapGet(`${itemId}/${duration}`);
    }

    getDay(itemId, tenMinute = false, params = {}) {
        if (tenMinute) {
            const dateFormat = 'Y-MM-DD';
            const date = moment().format(dateFormat);

            const startDate = (params.hasOwnProperty('start')) ? moment(params.start).format(dateFormat) : date;
            const endDate = (params.hasOwnProperty('end')) ? moment(params.end).format(dateFormat) : date;

            return this._wrapGet(`${itemId}/day?day=10&duration[start]=${startDate}&duration[end]=${endDate}`);
        } else {
            return this.getDuration('day', itemId);
        }
    }

    getWeek(itemId) {
        return this.getDuration('week', itemId);
    }

    getMonth(itemId) {
        return this.getDuration('month', itemId);
    }

    getQuarter(itemId) {
        return this.getDuration('quarter', itemId);
    }

    getYear(itemId) {
        return this.getDuration('year', itemId);
    }
}