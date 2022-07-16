import { fork } from "redux-saga/effects";
import { authUser } from "../features/login/loginSaga";

export default function* rootSaga() {
  console.log("Root Saga");
  yield fork(authUser);
}
