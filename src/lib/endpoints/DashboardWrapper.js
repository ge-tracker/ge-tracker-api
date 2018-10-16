import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class DashboardWrapper extends APIBaseWrapper {
    getDashboard() {
        return this._wrapGet('/dashboard');
    }
}