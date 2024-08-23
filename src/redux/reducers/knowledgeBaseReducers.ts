import {
  CREATE_KNOWLEDGE_BASE,
  CREATE_KNOWLEDGE_BASE_FAILURE,
  CREATE_KNOWLEDGE_BASE_SUCCESS,
  DELETE_USER_KNOWLEDGE_BASE,
  DELETE_USER_KNOWLEDGE_BASE_FAILURE,
  DELETE_USER_KNOWLEDGE_BASE_SUCCESS,
  GET_USER_KNOWLEDGE_BASE,
  GET_USER_KNOWLEDGE_BASE_FAILURE,
  GET_USER_KNOWLEDGE_BASE_SUCCESS,
} from '@/redux/actions/actionTypes';
import initialState from './initialState';
export default function knowledgeBaseReducers(
  state = initialState.KnowledgeBase,
  action: any
) {
  switch (action.type) {
    case CREATE_KNOWLEDGE_BASE:
      return {
        ...state,
        create: {
          ...state.create,
          loader: true,
        },
      };
    case CREATE_KNOWLEDGE_BASE_SUCCESS:
      return {
        ...state,
        create: {
          data: action.payload,
          loader: false,
        },
      };
    case CREATE_KNOWLEDGE_BASE_FAILURE:
      return {
        ...state,
        create: {
          data: action.payload,
          loader: false,
        },
      };
    case DELETE_USER_KNOWLEDGE_BASE:
      return {
        ...state,
        delete: {
          ...state.delete,
          loader: true,
        },
      };
    case DELETE_USER_KNOWLEDGE_BASE_SUCCESS:
      return {
        ...state,
        delete: {
          data: action.payload,
          loader: false,
        },
      };
    case DELETE_USER_KNOWLEDGE_BASE_FAILURE:
      return {
        ...state,
        delete: {
          data: action.payload,
          loader: false,
        },
      };
    case GET_USER_KNOWLEDGE_BASE:
      return {
        ...state,
        user: {
          ...state.user,
          loader: true,
        },
      };
    case GET_USER_KNOWLEDGE_BASE_SUCCESS:
      // console.log('s', action);
      return {
        ...state,
        user: {
          data: action.payload,
          loader: false,
        },
      };
    case GET_USER_KNOWLEDGE_BASE_FAILURE:
      return {
        ...state,
        user: {
          data: action.payload,
          loader: false,
        },
      };
    default:
      return state;
  }
}
