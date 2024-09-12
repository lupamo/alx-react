const { fromJS } = require('immutable');

/** function that convertes object parameter to an immutable Map */

function getImmutableObject(object) {
	return  fromJS(object);
}
