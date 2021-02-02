import APIBaseWrapper from './APIBaseWrapper';
export default class ItemSetsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
