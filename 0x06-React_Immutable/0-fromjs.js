const { fromJS } = require('immutable');

/** function that convertes object parameter to an immutable map */

function getImmutableObject(object) {
	return  fromJS(object);
}

const obj = {
	fear: true,
	smell: -1033575916.9145899,
	wall: false,
	thing: -914767132
}
console.log(getImmutableObject(obj));