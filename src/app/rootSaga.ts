import { createQuestion } from "features/newquestion/newQuestionSaga";
import { answerPoll, getPollDetail } from "features/polldetail/pollSaga";
import { fork } from "redux-saga/effects";
import { authUser } from "../features/login/loginSaga";

export default function* rootSaga() {
  yield fork(authUser);
  yield fork(getPollDetail);
  yield fork(answerPoll);
  yield fork(createQuestion);
}
