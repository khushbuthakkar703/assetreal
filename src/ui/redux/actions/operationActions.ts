import {
  ASSET_LOADING,
  GET_ERRORS,
  OPERATION_LOADING,
  GET_USER_OPERATIONS,
  NEW_OP,
  SELECT_OP,
  ADD_ASSET,
  GET_ASSET,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

// const Airtable = require("airtable");
// var base = new Airtable({ apiKey: "keyep7E4OjDIn6Bc8" }).base(
//   "app0HjRHFoWCbjrnL"
// );

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
      dispatch(getOperationsByOrg(payload.organization_id));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getOperationsByUser = (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/me/operations`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_USER_OPERATIONS,
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

export const getOperationsByOrg = (data: string) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/org/${data}/stats`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_USER_OPERATIONS,
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

// export const addAssets = (data: any) => (dispatch: any) => {
//   dispatch({ type: ASSET_LOADING });
//   const dd= {
//     isAirtable: true
//   }
//   base("AddAssetRequest").create(
//     data.fields,
//     function (err: any, records: any) {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       dispatch({ type: ADD_ASSET, payload: records.fields });
//     }
//   );
// };

// export const getAssets = () => (dispatch: any) => {
//   dispatch({ type: ASSET_LOADING });

//   base("AddAssetRequest")
//     .select({ view: "Grid view" })
//     .eachPage((records: any) => {
//       const data = records && records.map((item: any) => item.fields);

//       dispatch({ type: GET_ASSET, payload: data });
//     });
// };

export const selectOperation = (data: any) => (dispatch: any) => {
  return dispatch({
    type: SELECT_OP,
    payload: data,
  });
};

export const pinAsset = (data: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_ASSET,
    payload: data,
  });
};
