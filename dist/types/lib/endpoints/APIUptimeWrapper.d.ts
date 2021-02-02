import APIBaseWrapper from './APIBaseWrapper';
export default class APIUptimeWrapper extends APIBaseWrapper {
    getStatus(): Promise<any>;
}
