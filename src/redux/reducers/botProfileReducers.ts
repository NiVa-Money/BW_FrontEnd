import {
  CREATE_BOT_PROFILE,
  CREATE_BOT_PROFILE_FAILURE,
  CREATE_BOT_PROFILE_SUCCESS,
  DELETE_BOT_PROFILE,
  DELETE_BOT_PROFILE_FAILURE,
  DELETE_BOT_PROFILE_SUCCESS,
  EDIT_BOT_PROFILE,
  EDIT_BOT_PROFILE_FAILURE,
  EDIT_BOT_PROFILE_SUCCESS,
  GET_USER_BOT_PROFILE,
  GET_USER_BOT_PROFILE_FAILURE,
  GET_USER_BOT_PROFILE_SUCCESS,
  REMOVE_BOT_PROFILES,
} from '@/redux/actions/actionTypes';
import initialState from './initialState';
export default function botProfileReducers(
  state = initialState.botProfile,
  action: any
) {
  switch (action.type) {
    case CREATE_BOT_PROFILE:
      return {
        ...state,
        create: {
          ...state.create,
          loader: true,
        },
      };
    case CREATE_BOT_PROFILE_SUCCESS:
      return {
        ...state,
        create: { data: action.payload, loader: true },
      };
    case CREATE_BOT_PROFILE_FAILURE:
      return {
        ...state,
        create: { data: action.payload, loader: false },
      }; 
    case EDIT_BOT_PROFILE:
      return {
        ...state,
        edit: {
          ...state.create,
          loader: true,
        },
      };
    case EDIT_BOT_PROFILE_SUCCESS:
      return {
        ...state,
        edit: { data: action.payload, loader: false },
      };
    case EDIT_BOT_PROFILE_FAILURE:
      return {
        ...state,
        edit: { data: action.payload, loader: false },
      };
    case DELETE_BOT_PROFILE:
      return {
        ...state,
        delete: {
          ...state.delete,
          loader: true,
        },
      };
    case DELETE_BOT_PROFILE_SUCCESS:
      return {
        ...state,
        delete: { data: action.payload, loader: false },
      };
    case DELETE_BOT_PROFILE_FAILURE:
      return {
        ...state,
        delete: { data: action.payload, loader: false },
      };
    case GET_USER_BOT_PROFILE:
      return {
        ...state,
        botProfiles: {
          ...state.botProfiles,
          loader: true,
        },
      };
    case GET_USER_BOT_PROFILE_SUCCESS:
      return {
        ...state,
        botProfiles: { data: action.payload, loader: false },
      };
    case GET_USER_BOT_PROFILE_FAILURE:
      return {
        ...state,
        botProfiles: { data: action.payload, loader: false },
      };

    case REMOVE_BOT_PROFILES:
      return {
        ...state,
        create: {
          data: {},
          loader: false,
        },
        edit: {
          data: {},
          loader: false,
        },
        botProfiles: {
          data: [],
          loader: false,
        },
        delete: {
          data: {},
          loader: false,
        },
      }

    default:
      return state;
  }
}
