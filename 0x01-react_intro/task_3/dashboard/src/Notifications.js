import React from "react";
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from "./utils.js";
;

function Notification() {
	const handleClick = () => {
		console.log('Close button has been clicked');
	  };
	return (
		<div className="Notification">
			<p>Here is the list of notifications</p>
			<ul>
				<li style={{color: '#6b5c9a'}}>New course available</li>
				<li style={{color: 'red'}}>New resume available</li>
				<li dangerouslySetInnerHTML={getLatestNotification()} style={{color: 'red'}}></li>
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