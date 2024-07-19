import {
  CREATE_KNOWLEDGE_BASE,
  DELETE_USER_KNOWLEDGE_BASE,
  GET_USER_KNOWLEDGE_BASE,
} from '../actionTypes';

export const createKnowledgebaseAction = (data: any) => ({
  type: CREATE_KNOWLEDGE_BASE,
  payload: data,
});

export const getUserKnowledgeBaseAction = (data: any) => ({
  type: GET_USER_KNOWLEDGE_BASE,
  payload: data,
});

export const deleteUserKnowledgeBaseAction = (data: any) => ({
  type: DELETE_USER_KNOWLEDGE_BASE,
  payload: data,
});
