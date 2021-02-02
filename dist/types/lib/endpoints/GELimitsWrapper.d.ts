import APIBaseWrapper from './APIBaseWrapper';
export default class GELimitsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
