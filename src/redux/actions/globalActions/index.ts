import { SET_PATHNAME } from "../actionTypes";

export const setPathNameAction = (payload: string | null): any => ({
    type: SET_PATHNAME,
    payload: payload,
});