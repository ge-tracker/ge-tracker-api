import APIBaseWrapper from './APIBaseWrapper';
export default class CombinationItemsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
