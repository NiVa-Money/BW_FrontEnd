

import { SET_PATHNAME } from '@/redux/actions/actionTypes';
import initialState from '../initialState';

export default function globalReducers(state = initialState.root, action:any) {
    switch (action.type) {
        case SET_PATHNAME:
            return {
                ...state,
                pathName: action.payload,
            };
        default:
            return state;
    }
}

