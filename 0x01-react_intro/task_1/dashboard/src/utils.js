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
export {getFullYear, getFooterCopy}