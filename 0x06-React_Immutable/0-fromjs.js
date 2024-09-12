import { fromJS } from 'immutable';

/** function that convertes object parameter to an immutable map */

export default function getImmutableObject(object) {
	return  fromJS(object);
}
