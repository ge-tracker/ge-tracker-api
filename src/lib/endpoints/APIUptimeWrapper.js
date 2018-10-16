export default class APIUptimeWrapper {
    constructor(client) {
        this.client = client
    }

    getStatus() {
        return this.client.get('osb-uptime/status')
            .then(({data}) => data.data)
    }
}