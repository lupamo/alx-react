import { Map } from 'immutable';

 export default function getImmutableObject(object) {
	const mutatedObj =  Immutable.Map(object);
	return(mutatedObj);
}
