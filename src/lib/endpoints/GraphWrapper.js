import {handleResponseBody} from "../handlers";
import {GE_TRACKER_API_URL} from "../client";
import moment from 'moment';

export default class GraphWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        const apiUrl = GE_TRACKER_API_URL.replace('/api', '');
        return this.client.get(`${apiUrl}graph/${path}`)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getDuration(duration, itemId) {
        return this._wrapGet(`${itemId}/${duration}`);
    }

    getDay(itemId, tenMinute = false) {
        if (tenMinute) {
            const date = moment().format('Y-MM-DD');
            return this._wrapGet(`${itemId}/day?day=?day=10&duration[start]=${date}&duration[end]=${date}`);
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