import APIBaseWrapper from './APIBaseWrapper';

export default class RSUpdatesWrapper extends APIBaseWrapper {
    get(opts = {}) {
        return this.client.get(this.parseOptions('rs-updates', opts))
            .then(({data}) => data);
    }

    getUpdate(id: number) {
        return this._wrapGet(`rs-updates/${id}`);
    }
}
