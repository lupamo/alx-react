const Immutable = require('immutable');

/** 
 * function that convertes object parameter to an immutable 
 * map using Map
**/

function getImmutableObject(object) {
	const mutatedObj =  Immutable.Map(object);
	return(mutatedObj);
}

module.exports = getImmutableObject;