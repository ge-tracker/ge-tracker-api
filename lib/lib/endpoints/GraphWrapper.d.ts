import APIBaseWrapper from './APIBaseWrapper';
import { GraphDuration, GraphRequestParams, GraphSource } from "../../types";
export default class GraphWrapper extends APIBaseWrapper {
    _wrapGet(path: string): Promise<any>;
    getDuration(duration: GraphDuration, itemId: number, source?: GraphSource): Promise<any>;
    getDay(itemId: number, tenMinute?: boolean, params?: GraphRequestParams): Promise<any>;
    getWeek(itemId: number, source?: null): Promise<any>;
    getMonth(itemId: number, source?: null): Promise<any>;
    getQuarter(itemId: number, source?: null): Promise<any>;
    getYear(itemId: number, source?: null): Promise<any>;
    getAll(itemId: number, source?: null): Promise<any>;
    getCandlestick(duration: GraphDuration, itemId: number): Promise<any>;
    getIndicators(duration: GraphDuration, itemId: number): Promise<any>;
    forceReload(duration: GraphDuration, itemId: number): Promise<any>;
}
//# sourceMappingURL=GraphWrapper.d.ts.map