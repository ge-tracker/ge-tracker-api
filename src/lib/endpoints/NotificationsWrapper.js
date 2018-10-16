import APIBaseWrapper from './APIBaseWrapper';
import {handleResponseBody} from "../handlers";

export default class NotificationsWrapper extends APIBaseWrapper {
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