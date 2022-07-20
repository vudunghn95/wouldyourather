import { auth } from "features/login/loginSlice";
import { call, put, take } from "redux-saga/effects";
import { User } from "utils/type";
import { _saveQuestionAnswer } from "_DATA";
import { getQuestionById, getUserById } from "../../utils/util";
import { updatePoll } from "./pollSlice";
export function* getPollDetail() {
  while (true) {
    const { payload } = yield take("GET_POLL_DETAIL");
    const { question_id, user } = payload;
    const { question, isAnswered } = yield call(() =>
      getQuestionById(question_id, user)
    );
    yield put(updatePoll({ question, isAnswered }));
  }
}

export function* answerPoll() {
  while (true) {
    const { payload } = yield take("ANSWER_POLL");
    const { authedUser, qid } = payload;
    yield call(() => _saveQuestionAnswer(payload));
    const user: User = yield call(() => getUserById(authedUser));
    const { question, isAnswered } = yield call(() =>
      getQuestionById(qid, user)
    );
    yield put(updatePoll({ question, isAnswered }));
    yield put(auth({ isAuth: true, user }));
  }
}
