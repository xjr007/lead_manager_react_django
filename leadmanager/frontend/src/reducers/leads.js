import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';

const initialState = {
	leads: [],
	//fetching from back-end
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_LEADS:
			return {
				...state,
				leads: action.payload,
			};
		case DELETE_LEAD:
			return {
				...state,
				leads: state.leads.filter(lead => lead.id !== action.payload),
				//filter through and return non deleted leads + delete it
			};
		case ADD_LEAD:
			return {
				...state,
				leads: [...state.leads, action.payload],
			};
		default:
			return state;
	}
}
