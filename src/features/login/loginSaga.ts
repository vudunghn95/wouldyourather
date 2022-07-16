import { call, put, take } from "redux-saga/effects";
import { checkUser } from "../../utils/util";
import { auth } from "./loginSlice";
export function* authUser() {
  while (true) {
    const { payload } = yield take("SIGN_IN");
    const { isAuth, user } = yield call(() => checkUser(payload));
    if (isAuth) {
      yield put(auth({ isAuth, user }));
    }
  }
}
