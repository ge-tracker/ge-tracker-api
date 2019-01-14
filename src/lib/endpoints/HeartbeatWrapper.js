import APIBaseWrapper from './APIBaseWrapper';

export default class HeartbeatWrapper extends APIBaseWrapper {
    getHeartbeat() {
        return this._wrapGet('heartbeat');
    }
}