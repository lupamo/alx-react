import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html = null, value = '' }) {
	return (
		<li data-notification-type={type}>
		  {html ? (
			<span dangerouslySetInnerHTML={html} />
		  ) : (
			value
		  )}
		</li>
	);
};


NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
  html: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'object') {
      return new Error(
        `${componentName}: ${propName} should be an object`
      );
    }
    if (props[propName] && !props[propName].__html) {
      return new Error(
        `${componentName}: ${propName} object should have an __html key with a string value`
      );
    }
    if (props[propName] && props.value) {
      return new Error(
        `${componentName}: Only one of 'html' or 'value' should be provided`
      );
    }
    return null;
  },
  value: (props, propName, componentName) => {
    if (!props.html && !props[propName]) {
      return new Error(
        `${componentName}: 'value' is required if 'html' is not provided`
      );
    }
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(
        `${componentName}: 'value' should be a string`
      );
    }
    return null;
  }
};

export default NotificationItem;
