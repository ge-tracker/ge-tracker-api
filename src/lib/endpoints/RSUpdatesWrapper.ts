import APIBaseWrapper from './APIBaseWrapper';

type DaysOption = number | 'all'

type RsUpdateOptions = {
    days?: DaysOption,
};

export default class RSUpdatesWrapper extends APIBaseWrapper {
    get(opts: RsUpdateOptions = {}) {
        return this.client.get(this.parseOptions('rs-updates', opts))
            .then(({data}) => data);
    }

    getUpdate(id: number) {
        return this._wrapGet(`rs-updates/${id}`);
    }
}
