import { SET_CLIENT_DATA } from "../types";

export const clientdata = (data: any) => (dispatch: any) => {
  dispatch({
    type: SET_CLIENT_DATA,
    payload: data,
  });
};
