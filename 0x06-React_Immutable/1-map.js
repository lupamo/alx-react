const mutation = require('immutable');

/** 
 * function that convertes object parameter to an immutable 
 * map using Map
**/

export default function getImmutableObject(object) {
	const mutatedObj =  mutation.Map(object);
	return(mutatedObj);
}
