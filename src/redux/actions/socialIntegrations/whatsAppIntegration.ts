import {
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
