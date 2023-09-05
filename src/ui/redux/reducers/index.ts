import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { operationsReducer } from "./operationsReducer";
import { permissionsReducer } from "./permissionsReducer";
import { orgReducer } from "./orgReducer";
import { activityReducer } from "./activityReducer";

import initialState from "./initialState";
import { groupReducer } from "./groupsReducer";

export default combineReducers({
  auth: authReducer,
  app: appReducer,
  operations: operationsReducer,
  activity: activityReducer,
  perms: permissionsReducer,
  orgs: orgReducer,
  error: errorReducer,
  groups: groupReducer,
});
