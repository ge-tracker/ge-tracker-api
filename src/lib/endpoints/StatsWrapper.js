export default class StatsWrapper {
    constructor(client) {
        this.client = client
    }

    getGlobalStats() {
        return this.client.get('stats')
            .then(({data}) => data)
    }
}