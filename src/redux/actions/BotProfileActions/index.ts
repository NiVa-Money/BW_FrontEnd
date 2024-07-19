import {
  CREATE_BOT_PROFILE,
  EDIT_BOT_PROFILE,
  GET_USER_BOT_PROFILE,
} from '../actionTypes';

export const createBotProfileAction = (data: any) => {
  console.log("data",data)
  return({
  type: CREATE_BOT_PROFILE,
  payload: data,
})};
export const editBotProfileAction = (data: any) => ({
  type: EDIT_BOT_PROFILE,
  payload: data,
});
export const getUserBotProfileAction = (data: any) => ({
  type: GET_USER_BOT_PROFILE,
  payload: data,
});

export const deleteBotProfileServiceAction = (data: any) => ({
  type: GET_USER_BOT_PROFILE,
  payload: data,
});
