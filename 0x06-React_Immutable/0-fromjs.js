#!/usr/bin/node

/**  conversion of objects to immutable maps*/

const { fromJS } = require('immutable');

/** function that convertes object parameter to an immutable map */

function getImmutableObject(object) {
	return  fromJS(object);
}

module.exports = getImmutableObject;
