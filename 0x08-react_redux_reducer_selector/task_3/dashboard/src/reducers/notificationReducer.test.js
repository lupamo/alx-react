import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: 'DEFAULT',
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the data with isRead as false', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the notification with the correct id to isRead true', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter correctly', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: [],
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
