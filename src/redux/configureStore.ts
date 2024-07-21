'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import globalReducers from './reducers/globalReducers';
import rootSaga from './saga';
import knowledgeBaseReducers from './reducers/knowledgeBaseReducers';
import botProfileReducers from './reducers/botProfileReducers';
import userChatReducers from './reducers/userChatReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  root: globalReducers,
  botProfile: botProfileReducers,
  KnowledgeBase: knowledgeBaseReducers,
  userChat: userChatReducers,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
