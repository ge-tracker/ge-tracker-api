import APIBaseWrapper from './APIBaseWrapper';
export default class HighAlchemyWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
