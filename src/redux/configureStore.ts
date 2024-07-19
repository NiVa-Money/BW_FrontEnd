import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import globalReducers from './reducers/globalReducers';
import rootSaga from './saga';
import knowledgeBaseReducers from './reducers/knowledgeBaseReducers';
import botProfileReducers from './reducers/botProfileReducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    root: globalReducers,
    botProfile: botProfileReducers,
    KnowledgeBase: knowledgeBaseReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
