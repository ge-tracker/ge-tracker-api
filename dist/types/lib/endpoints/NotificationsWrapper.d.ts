import APIBaseWrapper from './APIBaseWrapper';
export default class NotificationsWrapper extends APIBaseWrapper {
    getNotifications(): Promise<any>;
    getNotification(notificationId: string): Promise<any>;
    markAllAsRead(): Promise<any>;
}
