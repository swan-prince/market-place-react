import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  getName: null,
  token: null,
  error: null,
  loading: false,
};
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.SIGN_IN:
        return {
          ...state,
          isSignedIn: true,
          userId: action.userId,
          getName: action.getName,
          token: action.token,
          error: null,
          loading: false,
        };
      case actionTypes.SIGN_OUT:
        return {
          ...state,
          isSignedIn: false,
          userId: null,
          getName: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;