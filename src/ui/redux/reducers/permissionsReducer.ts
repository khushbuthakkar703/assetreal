import * as types from "../types";
import initialState from "./initialState";
import { toast } from "react-toastify";

export const permissionsReducer = (
  state = initialState.permissions,
  action: any
) => {
  switch (action.type) {
    case types.PERMISSIONS_LOADING:
      return {
        loading: true,
      };
    case types.CREATE_NEW_USER:
      toast.dismiss();
      return {
        ...state,
        loading: false,
      };
    case types.MODIFY_USER:
      toast.dismiss();
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.SET_ROLE_FILTER:
      toast.dismiss();
      return {
        ...state,
        filterRole: action.payload,
        loading: false,
      };
    case types.GET_ORG_USERS:
      toast.dismiss();
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.CREATE_CLIENT:
      toast.dismiss();

      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
