import {
  USER_CHAT_DATA,
  USER_ALL_SESSION,
  USER_OUESTION_SESSION,
  USER_SESSION_HISTORY,
  ADVANCE_FEATURE,
  BOTSESSION_ID,
  USER_ALL_SESSION_LIVE,
  USER_ALL_SESSION_BOT,
} from '../actionTypes';

export const sendUserQuestion = (userChatData: any) => ({
  type: USER_CHAT_DATA,
  payload: userChatData,
});

export const getAllSession = (userId: any) => ({
  type: USER_ALL_SESSION,
  payload: userId,
});

export const getAllSessionLive = (userId: any) => ({
  type: USER_ALL_SESSION_LIVE,
  payload: userId,
});

export const getAllSessionBot = (session: any) => ({
  type: USER_ALL_SESSION_BOT,
  payload: session,
});

export const sendUserQuestionOnly = (payload: any) => ({
  type: USER_OUESTION_SESSION,
  payload,
});

export const filteredSession = (payload: any) => {
  const processedSessions: any = [];

  payload?.filteredSessions[0]?.sessions.forEach((session: any) => {
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

  const data = {
    sessionData: processedSessions,
    sessionId: payload.sessionId,
  };

  return {
    type: USER_SESSION_HISTORY,
    payload: data,
  };
};

export const getAdvanceFeature = (payload: any) => ({
  type: ADVANCE_FEATURE,
  payload,
});

export const botSessionId = (payload: any) => ({
  type: BOTSESSION_ID,
  payload,
});
