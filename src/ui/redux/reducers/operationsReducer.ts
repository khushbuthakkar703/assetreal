import * as types from "../types";
import { toast } from "react-toastify";

import initState from "./initialState";

export const operationsReducer = (
  state = initState.operations,
  action: any
) => {
  switch (action.type) {
    case types.OPERATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.NEW_PORTFOLIO:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER_OPERATIONS:
      toast.dismiss();
      return {
        ...state,
        operations: action.payload,
        loading: false,
      };
    case types.NEW_OP:
      toast.dismiss();
      return {
        ...state,
        loading: false,
      };
    case types.GET_PORT_BY_OP:
      toast.dismiss();
      return {
        ...state,
        portfolios: action.payload,
        loading: false,
      };
    case types.SELECT_OP:
      return {
        ...state,
        portfolios: [],
        selectedOp: action.payload,
        loading: false,
      };
    case types.CLEAR_PORTFOLIOS:
      return {
        ...state,
        // portfolios: [],
      };
    case types.SET_PORT:
      return {
        ...state,
        selectedPort: action.payload,
      };
    case types.GET_ASSET:
      return {
        ...state,
        assets: action.payload,
      };
    default:
      return state;
  }
};
