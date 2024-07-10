import { SET_PATHNAME } from "@/redux/actions/actionTypes";
import initialState from "../initialState";

export default function globalReducer(
    state = initialState.root,
    action: any
): any {
    switch (action.type) {
        case SET_PATHNAME:
            state = {
                ...state,
                pathName: action.payload,
            };
            return state;
                default:
            return state;
    }
}
