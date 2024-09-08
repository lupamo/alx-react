import React, { Component } from "react";
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from "../utils/utils.js";
import { StyleSheet, css } from 'aphrodite';

const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  notificationsContainer: {
    position: 'relative',
    width: '300px',
    margin: '10px 0',
  },
  notificationsList: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    padding: '10px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  closeButtonIcon: {
    width: '15px',
    height: '15px',
  },
  menuItem: {
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '10px',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationTimingFunction: 'ease-in-out',
    },
  },
});

class Notifications extends Component {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className={css(styles.notificationsContainer)}>
        <div className={css(styles.menuItem)} onClick={displayDrawer ? handleHideDrawer : handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div className={css(styles.notificationsList)}>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <p>No new notifications for now</p>
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => markNotificationAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
            <button
              className={css(styles.button)}
              aria-label="close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close-icon" className={css(styles.closeButtonIcon)} />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;
