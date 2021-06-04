import { combineReducers } from "redux";
import adminAuthReducer from "./admin/adminAuth";
import adminUsersReducer from "./admin/Users";
import adminCategoriesReducer from "./admin/Categories";
import adminReportsReducer from "./admin/Reports";

export default combineReducers({
  adminAuth: adminAuthReducer,
  adminUsers: adminUsersReducer,
  adminCategories: adminCategoriesReducer,
  adminReports: adminReportsReducer
});
