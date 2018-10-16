import APIBaseWrapper from './APIBaseWrapper';

export default class APIUptimeWrapper extends APIBaseWrapper {
    getStatus() {
        return this.client.get('osb-uptime/status')
            .then(({data}) => data.data)
    }
}