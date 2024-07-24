import {
  ADVANCE_FEATURE,
  ADVANCE_FEATURE_FAILURE,
  ADVANCE_FEATURE_SUCCESS,
  GET_USER_All_SESSION_FAILURE,
  GET_USER_All_SESSION_SUCCESS,
    GET_USER_CHAT_FAILURE,
    GET_USER_CHAT_SUCCESS,
    USER_ALL_SESSION,
    USER_CHAT_DATA,
    USER_OUESTION_SESSION,
    USER_SESSION_HISTORY
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

      case USER_OUESTION_SESSION:
        // console.log("USER_OUESTION_SESSION",action.payload)
        const previousData = state.sessionChat.data
        // console.log("previousdata",previousData)
        const newData = previousData ? [...previousData, action.payload] : [action.payload];
        return {
          ...state,
          sessionChat: { data: newData ,loader: true },
      };

      case USER_SESSION_HISTORY:
        // console.log("USER_OUESTION_SESSION",action.payload)
        const userSessionData = action.payload.sessionData
        const selecSessionId = action.payload.sessionId
        return {
          ...state,
          sessionChat: { data: userSessionData ,sessionId:selecSessionId,loader: true },
      };
        
      case GET_USER_CHAT_SUCCESS:
        // console.log("GET_USER_CHAT_SUCCESS",action.payload)
        const data = {
          text: action.payload.text,
          sender: action.payload.sender,
        }
        const sessionId = action.payload.sessionId
        return {
            ...state,
            sessionChat: { data: [...state.sessionChat.data,data], sessionId ,loader: true },
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

        case ADVANCE_FEATURE:
          console.log("ADVANCE_FEATURE")
          return {
              ...state,
              advanceFeature : { data: action.payload, loader: true },
          };

        case ADVANCE_FEATURE_SUCCESS:
          console.log("ADVANCE_FEATURE_SUCCESS")
          return {
              ...state,
              advanceFeature : { data: action.payload, loader: true },
          };

        case ADVANCE_FEATURE_FAILURE:
            console.log("ADVANCE_FEATURE_SUCCESS")
            return {
                ...state,
                advanceFeature : { data: action.payload, loader: false },
            };
            
    default:
        return state;
    }
}