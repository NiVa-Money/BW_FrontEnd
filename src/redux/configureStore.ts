import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import globalReducers from './reducers/globalReducers';
import rootSaga from './saga';
import knowledgeBaseReducers from './reducers/knowledgeBaseReducers';
import botProfileReducers from './reducers/botProfileReducers';
import userChatReducers from './reducers/userChatReducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    root: globalReducers,
    botProfile: botProfileReducers,
    KnowledgeBase: knowledgeBaseReducers,
    userChat:userChatReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false ,serializableCheck:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
