import {
  DELETE_WHATSAPP_INTEGRATION,
  DELETE_WHATSAPP_INTEGRATION_FAILURE,
  DELETE_WHATSAPP_INTEGRATION_SUCCESS,
  EDIT_WHATSAPP_INTEGRATION,
  EDIT_WHATSAPP_INTEGRATION_FAILURE,
  EDIT_WHATSAPP_INTEGRATION_SUCCESS,
  GET_WHATSAPP_WEBHOOK,
  GET_WHATSAPP_WEBHOOK_FAILURE,
  GET_WHATSAPP_WEBHOOK_SUCCESS,
  SAVE_WHATSAPP_INTEGRATION,
  SAVE_WHATSAPP_INTEGRATION_FAILURE,
  SAVE_WHATSAPP_INTEGRATION_SUCCESS,
} from '../actions/actionTypes';
import initialState from './initialState';
export default function socialIntegrationReducers(
  state = initialState.socialIntegrations,
  action: any
) {
  switch (action.type) {
    case GET_WHATSAPP_WEBHOOK:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          getWebhook: {
            ...state.whatsApp.getWebhook,
            loader: true,
          },
        },
      };
    case GET_WHATSAPP_WEBHOOK_SUCCESS:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          getWebhook: {
            loader: false,
            data: action.payload.data,
          },
          editWebhook:{
            loader:false,
            data:null
          }
        },
      };
    case GET_WHATSAPP_WEBHOOK_FAILURE:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          getWebhook: {
            loader: false,
            data: null,
          },
        },
      };
    case SAVE_WHATSAPP_INTEGRATION:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          saveWebhook: {
            ...state.whatsApp.saveWebhook,
            loader: true,
          },
        },
      };
    case SAVE_WHATSAPP_INTEGRATION_SUCCESS:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          saveWebhook: {
            loader: false,
            data: action.payload.data,
          },
        },
      };
    case SAVE_WHATSAPP_INTEGRATION_FAILURE:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          saveWebhook: {
            loader: false,
            data: null,
          },
        },
      };
    case EDIT_WHATSAPP_INTEGRATION:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          editWebhook: {
            ...state.whatsApp.saveWebhook,
            loader: true,
          },
        },
      };
    case EDIT_WHATSAPP_INTEGRATION_SUCCESS:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          editWebhook: {
            loader: false,
            data: action.payload.data,
          },
        },
      };
    case EDIT_WHATSAPP_INTEGRATION_FAILURE:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          editWebhook: {
            loader: false,
            data: null,
          },
        },
      };

    case DELETE_WHATSAPP_INTEGRATION:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          deleteWebhook: {
            ...state.whatsApp.saveWebhook,
            loader: true,
          },
        },
      };
    case DELETE_WHATSAPP_INTEGRATION_SUCCESS:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          deleteWebhook: {
            loader: false,
            data: action.payload.data,
          },
        },
      };
    case DELETE_WHATSAPP_INTEGRATION_FAILURE:
      return {
        ...state,
        whatsApp: {
          ...state.whatsApp,
          deleteWebhook: {
            loader: false,
            data: null,
          },
        },
      };
    default:
      return state;
  }
}
