// import createSagaMiddleware from 'redux-saga';
// import { configureStore } from '@reduxjs/toolkit';
// import { rootSaga } from './saga';
// import globalReducer from './reducers/globalReducers/globalReducers';

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//     reducer: {
//        root:globalReducer
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import globalReducers from './reducers/globalReducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    root: globalReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
