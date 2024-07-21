import {
  GET_USER_All_SESSION_FAILURE,
  GET_USER_All_SESSION_SUCCESS,
    GET_USER_CHAT_FAILURE,
    GET_USER_CHAT_SUCCESS,
    USER_ALL_SESSION,
    USER_CHAT_DATA
  } from '@/redux/actions/actionTypes';
  import initialState from './initialState';
  export default function userChatReducers(state = initialState.userChat, action: any) {
    switch (action.type) {
       case USER_CHAT_DATA:

       console.log("USER_CHAT_DATA")
        return {
          ...state,
          sessionChat: {
            ...state.sessionChat,
            loader: true,
            },
        };
        
      case GET_USER_CHAT_SUCCESS:
        console.log("GET_USER_CHAT_SUCCESS")
        return {
            ...state,
            sessionChat: { data: [...state.sessionChat.data,action.payload], loader: true },
        };
      case GET_USER_CHAT_FAILURE:
        return {
            ...state,
            sessionChat: { data: action.payload, loader: false },
        };
      case USER_ALL_SESSION:
        return {
          ...state,
          allSession: { data: action.payload, loader: false },
      };
      case GET_USER_All_SESSION_SUCCESS:
        console.log("GET_USER_All_SESSION_SUCCESS")
        return {
            ...state,
            allSession: { data: action.payload, loader: true },
        };
      case GET_USER_All_SESSION_FAILURE:
        console.log("GET_USER_All_SESSION_FAILURE")
        return {
            ...state,
            allSession: { data: action.payload, loader: false },
        };
    default:
        return state;
    }
}