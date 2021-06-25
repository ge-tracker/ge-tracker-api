import APIBaseWrapper from './APIBaseWrapper';
declare type DaysOption = number | 'all';
declare type RsUpdateOptions = {
    days?: DaysOption;
};
export default class RSUpdatesWrapper extends APIBaseWrapper {
    get(opts?: RsUpdateOptions): Promise<any>;
    getUpdate(id: number): Promise<any>;
}
export {};
//# sourceMappingURL=RSUpdatesWrapper.d.ts.map