import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification selectors', () => {
  const state = fromJS({
    notifications: {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    },
    filter: 'DEFAULT'
  });

  it('filterTypeSelected should return the filter type from state', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const result = getNotifications(state);
    expect(result.toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(state);
    expect(result.toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
  });
});
