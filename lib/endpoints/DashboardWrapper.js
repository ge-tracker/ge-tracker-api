import {handleResponseBody} from "../api";

export default class DashboardWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    getDashboard() {
        return this._wrapGet('/dashboard');
    }
}