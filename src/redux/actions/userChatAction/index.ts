import {
  USER_CHAT_DATA,
  USER_ALL_SESSION,
  USER_OUESTION_SESSION,
  USER_SESSION_HISTORY,
} from '../actionTypes';

export const sendUserQuestion = (userChatData: any) => ({
  type: USER_CHAT_DATA,
  payload: userChatData,
});

export const getAllSession = (userId: any) => ({
  type: USER_ALL_SESSION,
  payload: userId,
});

export const sendUserQuestionOnly = (payload: any) => ({
  type: USER_OUESTION_SESSION,
  payload,
});

export const filteredSession = (filteredSessions: any) => {
  const processedSessions:any = [];

  filteredSessions[0].sessions.forEach((session:any) => {
    if (session.question) {
      processedSessions.push({
        text: session.question,
        sender: 'user',
      });
    }
    if (session.answer) {
      processedSessions.push({
        text: session.answer,
        sender: 'other',
      });
    }
  });

  // console.log(processedSessions);

  console.log(processedSessions);
  return {
    type: USER_SESSION_HISTORY,
    payload: processedSessions,
  };
};
