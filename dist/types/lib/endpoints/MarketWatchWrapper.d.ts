import APIBaseWrapper from './APIBaseWrapper';
export default class MarketWatchWrapper extends APIBaseWrapper {
    getIndex(indexId: number | string): Promise<any>;
    getSummary(): Promise<any>;
}
