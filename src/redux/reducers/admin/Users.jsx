import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
		case actionTypes.ADMIN_SET_USERS:
			if(state.users !== action.payload) {
				return {
					...state,
					users: action.payload
				};
			}
			else {
				return {
					...state
				}
			}
		default: 
			return state;
	}
}
