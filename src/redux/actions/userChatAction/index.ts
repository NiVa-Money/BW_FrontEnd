import {
    USER_CHAT_DATA,
    USER_ALL_SESSION
  } from '../actionTypes';
  
  export const sendUserQuestion = (userChatData: any) => ({
    type: USER_CHAT_DATA,
    payload: userChatData,
  });

  export const getAllSession = (userId:any) => ({ 
    type: USER_ALL_SESSION ,
    payload: userId
  });