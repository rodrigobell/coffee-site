import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case types.CREATE_LATTE_ART:
			return [...state, 
				Object.assign({}, action.latteArt)
			];
		
		default:
			return state;
	}
}