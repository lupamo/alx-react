import React from "react";
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from "../Notifications/NotificationItem.js";
import { getLatestNotification } from "../utils/utils.js";

function Notification() {
	const handleClick = () => {
		console.log('Close button has been clicked');
	  };
	return (
		<div className="Notification">
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available" />
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
	);
}

export default Notification;