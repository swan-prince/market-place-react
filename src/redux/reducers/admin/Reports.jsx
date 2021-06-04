import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
	listings: [],
	users: []
};

export default (state=INITIAL_STATE, { type, payload }) => {
  switch(type) {
		case actionTypes.ADMIN_SET_LISTINGS:
			return {
				...state,
				listings: payload.listings
			}
		case actionTypes.ADMIN_SET_REPORTED_USERS:
			return {
				...state,
				users: payload.users
			}
		default: 
			return state;
	}
}
