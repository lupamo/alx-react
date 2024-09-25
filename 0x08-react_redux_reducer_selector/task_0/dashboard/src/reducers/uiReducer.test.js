import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT,
  SELECT_COURSE // Assume this is an unrelated action 
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(state).toEqual(expectedState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    expect(state).toEqual(expectedState);
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('should set isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('should set isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('should set isUserLoggedIn to false when LOGOUT is passed', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.isUserLoggedIn).toBe(false);
  });
});
