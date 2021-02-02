import APIBaseWrapper from './APIBaseWrapper';
export default class HeartbeatWrapper extends APIBaseWrapper {
    getHeartbeat(): Promise<any>;
}
