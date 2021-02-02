import APIBaseWrapper from './APIBaseWrapper';
export default class DecantPotionsWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
