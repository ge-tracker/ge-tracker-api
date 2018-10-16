import APIBaseWrapper from './APIBaseWrapper';

export default class StatsWrapper extends APIBaseWrapper {
    getGlobalStats() {
        return this.client.get('stats')
            .then(({data}) => data)
    }
}