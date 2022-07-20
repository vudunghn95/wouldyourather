import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUser } from "features/login/loginSlice";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { _getQuestions } from "_DATA";
import AnsweredPoll from "./AnsweredPoll";
import { selectPoll } from "./pollSlice";
import UnansweredPoll from "./UnansweredPoll";

function PollDetail() {
  let { question_id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const { question, isAnswered } = useAppSelector(selectPoll);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isValidQuestion = async () => {
      const result = await _getQuestions();
      const isExist = Object.values(result).find(
        (q: any) => q.id === question_id
      );
      if (!isExist) {
        navigate("/404");
      } else {
        dispatch({
          type: "GET_POLL_DETAIL",
          payload: { question_id, user },
        });
      }
    };
    isValidQuestion();
  }, [dispatch, user, navigate, question_id]);

  return (
    <>
      {isAnswered ? (
        <AnsweredPoll poll={question} user={user} />
      ) : (
        <UnansweredPoll poll={question} userId={user.id} />
      )}
    </>
  );
}

export default PollDetail;
