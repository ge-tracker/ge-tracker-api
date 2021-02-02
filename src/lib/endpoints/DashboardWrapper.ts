import APIBaseWrapper from './APIBaseWrapper';

export default class DashboardWrapper extends APIBaseWrapper {
    getDashboard() {
        return this._wrapGet('/dashboard');
    }
}
