import React, { Component } from "react";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
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
	notificationsPanel: {
	  position: 'fixed',
	  top: 0,
	  left: 0,
	  right: 0,
	  bottom: 0,
	  backgroundColor: 'white',
	  zIndex: 9999,
	  fontSize: '20px',
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'flex-start',
	  padding: '20px',
	  '@media (max-width: 900px)': {
		padding: '0',
		fontSize: '20px',
	  }
	},
	notificationsList: {
	  padding: 0,
	  margin: 0,
	  listStyleType: 'none',
	  width: '100%',
	},
	button: {
	  position: 'absolute',
	  top: '20px',
	  right: '20px',
	  backgroundColor: 'transparent',
	  border: 'none',
	  cursor: 'pointer',
	},
	closeButtonIcon: {
	  width: '15px',
	  height: '15px',
	},
	menuItem: {
	  position: 'fixed',
	  right: '20px',
	  top: '20px',
	  backgroundColor: '#fff8f8',
	  cursor: 'pointer',
	  zIndex: 10000,
	  ':hover': {
		animationName: [opacityKeyframes, bounceKeyframes],
		animationDuration: '1s, 0.5s',
		animationIterationCount: '3, 3',
		animationTimingFunction: 'ease-in-out',
	  },
	},
  });
  
class Notification extends Component {
	render() {
		const displayDrawer = true;
		const handleClick = () => {
			console.log('Close button has been clicked');
		  };
		return (
			<>
				<div className={css(styles.body)}>
					<p>Your notifications</p>
					{displayDrawer && (
					<div className="Notifications">
						<p>Here is the list of notifications</p>
						<ul>
							<NotificationItem type="info" value="New course available" />
							<NotificationItem type="default" value="New resume available" />
							<NotificationItem type="urgent" html={getLatestNotification()} />
						</ul>
						<button
							style={{
							position: 'absolute',
							top: '20px',
							right: '20px',
							backgroundColor: 'none',
							border: 'none',
							cursor: 'pointer',
							}}
							aria-label="close"
							onClick={handleClick}
						>
							<img src={closeIcon} alt="close-icon" style={{ width: '15px', height: '15px' }} />
						</button>
					</div>
				)}
				
				</div>
				
			</>
		);
	};
}

export default Notification;
