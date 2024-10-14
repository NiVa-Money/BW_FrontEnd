import {
  DELETE_WHATSAPP_INTEGRATION,
  EDIT_WHATSAPP_INTEGRATION,
  GET_WHATSAPP_WEBHOOK,
  SAVE_WHATSAPP_INTEGRATION,
} from '../actionTypes';

export const saveWhatsAppAction = (payload: any) => ({
  type: SAVE_WHATSAPP_INTEGRATION,
  payload,
});

export const getWhatsAppWebhookAction = (payload: any) => ({
  type: GET_WHATSAPP_WEBHOOK,
  payload,
});

export const editWhatsAppAction = (payload: any) => ({
  type: EDIT_WHATSAPP_INTEGRATION,
  payload,
});
export const deleteWhatsAppAction = (payload: any) => ({
  type: DELETE_WHATSAPP_INTEGRATION,
  payload,
});
