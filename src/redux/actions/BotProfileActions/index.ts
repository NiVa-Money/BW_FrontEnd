import {
  CREATE_BOT_PROFILE,
  EDIT_BOT_PROFILE,
  GET_USER_BOT_PROFILE,
  DELETE_BOT_PROFILE,
  EXPORT_BOT_PROFILE,
  REMOVE_BOT_PROFILES,
  REMOVE_ADVANCE_FEATURE
} from '../actionTypes';

export const createBotProfileAction = (data: any) => {

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
  type: DELETE_BOT_PROFILE,
  payload: data,
});

export const exportBotProfileServiceAction = (data: any) => ({
  type: EXPORT_BOT_PROFILE,
  payload: data,
});

export const removeFromReduxbot = () => ({
  type: REMOVE_BOT_PROFILES,
})

export const removeAdvanceFeature = () => ({
  type: REMOVE_ADVANCE_FEATURE
})
