import { auth } from "features/login/loginSlice";
import { call, put, take } from "redux-saga/effects";
import { User } from "utils/type";
import { _saveQuestion } from "_DATA";
import { getUserById } from "../../utils/util";

export function* createQuestion() {
  while (true) {
    const { payload } = yield take("CREATE_QUESTION");
    const { author } = payload;
    yield call(() => _saveQuestion(payload));
    const user: User = yield call(() => getUserById(author));
    yield put(auth({ isAuth: true, user }));
  }
}
