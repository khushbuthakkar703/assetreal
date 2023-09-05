import {
  GET_ERRORS,
  OPERATION_LOADING,
  GET_USER_OPERATIONS,
  NEW_OP,
  SELECT_OP,
  ADD_ASSET,
} from "../types";

import http from "../../@core/utils/https-common";
import headers from "./headers";

export const createNewOperation = (payload: any) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .post(`/operation/new`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: NEW_OP,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
