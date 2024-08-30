import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html = null, value = '' }) {
	return (
		<li 
		data-notification-type={type}
		style={{
			color:type === 'urgent' ? 'red' : 'black',
			fontweight: type === 'urgent' ? 'bold' : 'normal',
		}}
		>
		  {html ? (
			<span dangerouslySetInnerHTML={html} />
		  ) : (
			value
		  )}
		</li>
	);
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	html: PropTypes.shape({
	  __html: PropTypes.string,
	}),
	value: PropTypes.string,
};

export default NotificationItem;
