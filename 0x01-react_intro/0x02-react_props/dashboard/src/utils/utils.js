function getFullYear() {
	const currentYear = new Date();
	return currentYear.getFullYear();
}

function getFooterCopy(isIndex) {
	if (isIndex) {
		return("Holberton School");
	} else {
		return("Holberton School main dashboard");
	}
}

function getLatestNotification() {
	return{__html: "<strong>Urgent requirement</strong> - complete by EOD"};
}


export { getFullYear, getFooterCopy, getLatestNotification }