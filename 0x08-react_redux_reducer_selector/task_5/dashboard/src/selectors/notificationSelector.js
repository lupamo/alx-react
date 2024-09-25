export const filterTypeSelected = (state) => {
	return state.get('filter');
};
  
export const getNotifications = (state) => {
return state.get('notifications');
};
  
export const getUnreadNotifications = (state) => {
	return state.get('notifications').filter(notification => !notification.isRead);
};
