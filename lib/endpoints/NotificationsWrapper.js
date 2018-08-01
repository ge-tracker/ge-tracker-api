import {handleResponseBody} from "../api";

export default class NotificationsWrapper {
    constructor(client) {
        this.client = client
    }

    _wrapGet(path) {
        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params = {}) {
        return this.client.post(path, params)
            .then(({data}) => data);
    }

    getNotifications() {
        return this._wrapGet('notifications');
    }

    getNotification(notificationId) {
        return this._wrapGet(`notifications/${notificationId}`);
    }

    markAllAsRead() {
        return this._wrapPost(`notifications/mark-read`);
    }
}