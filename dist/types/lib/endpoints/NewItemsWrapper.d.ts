import APIBaseWrapper from './APIBaseWrapper';
export default class NewItemsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
