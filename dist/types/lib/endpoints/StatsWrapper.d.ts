import APIBaseWrapper from './APIBaseWrapper';
export default class StatsWrapper extends APIBaseWrapper {
    getGlobalStats(): Promise<any>;
    getOnlineUsers(): Promise<any>;
}
