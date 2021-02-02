import APIBaseWrapper from './APIBaseWrapper';
export default class RSUpdatesWrapper extends APIBaseWrapper {
    get(opts?: {}): Promise<any>;
    getUpdate(id: number): Promise<any>;
}
