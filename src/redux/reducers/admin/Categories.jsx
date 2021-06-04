import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
	categories: [],
	pricing_models: []
};

export default (state=INITIAL_STATE, { type, payload }) => {
  switch(type) {
		case actionTypes.ADMIN_SET_CATEGORIES:
			return {
				...state,
				categories: payload.categories
			}
		case actionTypes.ADMIN_SET_PRICING_MODELS:
			return {
				...state,
				pricing_models: payload.pricing_models
			}
		default: 
			return state;
	}
}
