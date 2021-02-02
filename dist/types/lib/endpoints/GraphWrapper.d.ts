import APIBaseWrapper from './APIBaseWrapper';
export declare type GraphDuration = 'day' | 'week' | 'month' | 'quarter' | 'year';
export declare type GraphSource = 'getracker' | 'osbuddy' | null;
export declare type GraphDayDuration = '10' | '30';
export declare type GraphRequestParams = {
    source?: GraphSource;
    day?: GraphDayDuration;
    start?: string;
    end?: string;
};
export default class GraphWrapper extends APIBaseWrapper {
    _wrapGet(path: string): Promise<any>;
    getDuration(duration: GraphDuration, itemId: number, source?: GraphSource): Promise<any>;
    getDay(itemId: number, tenMinute?: boolean, params?: GraphRequestParams): Promise<any>;
    getWeek(itemId: number, source?: null): Promise<any>;
    getMonth(itemId: number, source?: null): Promise<any>;
    getQuarter(itemId: number, source?: null): Promise<any>;
    getYear(itemId: number, source?: null): Promise<any>;
    getCandlestick(duration: GraphDuration, itemId: number): Promise<any>;
    forceReload(duration: GraphDuration, itemId: number): Promise<any>;
}
