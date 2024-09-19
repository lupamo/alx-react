import * as notificationData from "../../notifications.json"
import { normalize, schema } from normalizr;

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications)
    .filter(notification => notification.author === userId)
    .map(notification => messages[notification.context]);
}

export { user, message, notification };
