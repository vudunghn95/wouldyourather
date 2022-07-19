import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUser } from "features/login/loginSlice";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import { selectPoll } from "./pollSlice";
import UnansweredPoll from "./UnansweredPoll";

function PollDetail() {
  let { question_id } = useParams();
  const user = useAppSelector(selectUser);
  const { question, isAnswered } = useAppSelector(selectPoll);
  console.log("question, isAnswered", question, isAnswered);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_POLL_DETAIL",
      payload: { question_id, user },
    });
  }, [dispatch, question_id, user]);

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
