import * as types from "../types";
import { toast } from "react-toastify";

import initState from "./initialState";

export const orgReducer = (state = initState.orgs, action: any) => {
  switch (action.type) {
    case types.ORGS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.NEW_ADMIN_USER:
      toast.dismiss();
      return {
        ...state,
        loading: false,
      };
    case types.GET_ALL_ORGS:
      toast.dismiss();
      return {
        ...state,
        loading: false,
        orgs: action.payload,
      };
    case types.GET_CUSTODIANS:
      toast.dismiss();
      return {
        ...state,
        loading: false,
        custodians: action.payload,
      };
    case types.SELECT_ORG:
      toast.dismiss();
      return {
        ...state,
        selectedOrg: action.payload,
      };
    default:
      return state;
  }
};
