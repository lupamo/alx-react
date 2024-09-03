import React, { Component } from "react";
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from "../utils/utils.js";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	body: {
		border: '2px solid red',
		padding: '20px'
	}
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
