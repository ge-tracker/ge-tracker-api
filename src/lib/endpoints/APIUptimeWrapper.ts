import APIBaseWrapper from './APIBaseWrapper';

export default class APIUptimeWrapper extends APIBaseWrapper {
    getStatus() {
        return this._wrapGet('osb-uptime/status');
    }
}