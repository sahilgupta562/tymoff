import { NOTIFICATION } from "./action-types";

const clearNotification = () => ({
  type: NOTIFICATION.CLEAR
});

const setNotificationError = error => ({
  type: NOTIFICATION.LOAD_FAILED,
  error
});

const setNotifications = notifications => ({
  type: NOTIFICATION.LOAD_SUCCESS,
  notifications
});

const setNotificationsCount = count => ({
  type: NOTIFICATION.COUNT,
  count
});

const loadNotification = () => ({
  type: NOTIFICATION.LOAD
});

export { setNotifications, loadNotification, clearNotification, setNotificationError, setNotificationsCount };
