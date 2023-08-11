import APIBaseWrapper from './APIBaseWrapper';

export default class HeartbeatWrapper extends APIBaseWrapper {
    getHeartbeat() {
        return this._wrapGet('heartbeat');
    }

    user() {
        return this.client.post('heartbeat');
    }

    guest() {
        return this.client.post('heartbeat/guest');
    }
}
