import APIBaseWrapper from './APIBaseWrapper';

export default class NotificationsWrapper extends APIBaseWrapper {
    getNotifications() {
        return this._wrapGet('notifications');
    }

    getNotification(notificationId: string) {
        return this._wrapGet(`notifications/${notificationId}`);
    }

    markAllAsRead() {
        return this._wrapPost(`notifications/mark-read`);
    }
}
