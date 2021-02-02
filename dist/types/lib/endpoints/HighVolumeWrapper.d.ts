import APIBaseWrapper from './APIBaseWrapper';
export default class HighVolumeWrapper extends APIBaseWrapper {
    getItems(opts?: {
        filters: boolean;
    }): Promise<any>;
}
