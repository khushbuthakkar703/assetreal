import {
  CREATE_CLIENT,
  CREATE_NEW_USER,
  GET_ALL_ORGS,
  GET_ERRORS,
  GET_ORG_USERS,
  MODIFY_USER,
  NEW_PORTFOLIO,
  NEW_USER,
  OPERATION_LOADING,
  SELECT_ORG,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

export const createUser = (payload: any) => (dispatch: any) => {
  http
    .post(`/user/new`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: CREATE_NEW_USER,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

// needs work
export const createRootUser = (payload: any) => (dispatch: any) => {
  http
    .post(`/user/new`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: CREATE_NEW_USER,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const modifyUser = (payload: any, id: any) => (dispatch: any) => {
  http
    .put(`/user/${id}/modify`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: MODIFY_USER,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getOrgUsers = (id: any) => (dispatch: any) => {
  http
    .get(`/org/${id}/users`, headers())

    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_ORG_USERS,
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

export const getAllOrgs = () => (dispatch: any) => {
  http
    .get(`/org/all`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_ALL_ORGS,
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

export const selectOrg = (data: any) => (dispatch: any) => {
  return dispatch({
    type: SELECT_ORG,
    payload: data,
  });
};

export const createNewClient = (payload: any) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  const AR_Token = true;
  http
    .post(`/admin/init`, payload, headers(AR_Token))
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: CREATE_CLIENT,
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
