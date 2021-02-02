import APIBaseWrapper from './APIBaseWrapper';
export default class StoreProfitWrapper extends APIBaseWrapper {
    getStores(): Promise<any>;
    getItems(): Promise<any>;
}
