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
import { rootSaga } from './saga';
import counterSlice from './counterSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

