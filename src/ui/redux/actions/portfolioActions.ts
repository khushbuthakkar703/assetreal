import {
  GET_ERRORS,
  NEW_PORTFOLIO,
  GET_PORT_BY_OP,
  GET_PORT,
  OPERATION_LOADING,
  CLEAR_PORTFOLIOS,
  SET_PORT,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

export const createPortfolio =
  (payload: any, id: string) => (dispatch: any) => {
    http
      .post(`/operation/${id}/portfolio`, payload, headers())

      .then((res) => {
        const data = res.data.data;

        dispatch({
          type: NEW_PORTFOLIO,
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

export const getPortfoliosByOperation = (id: string) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/operation/${id}/portfolio?page=1&limit=50`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_PORT_BY_OP,
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

export const getPortfolio = (id: string) => (dispatch: any) => {
  http
    .get(`/portfolio/${id}`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_PORT,
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

export const clearLoadedPortfolios = () => (dispatch: any) => {
  return dispatch({
    type: CLEAR_PORTFOLIOS,
  });
};

export const setPortfolio = (data: any) => (dispatch: any) => {
  return dispatch({
    type: SET_PORT,
    payload: data,
  });
};
// getPortsByUser

// GetAssetsByPortfolio

// getPortById
