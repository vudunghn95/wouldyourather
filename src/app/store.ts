import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import pollReducer from "../features/polldetail/pollSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pollDetail: pollReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sageMiddleware),
});
sageMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
