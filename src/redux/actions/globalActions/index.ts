import { SET_PATHNAME } from "../actionTypes";

export const setPathNameAction = (payload:any) => ({
  type: SET_PATHNAME,
  payload,
});