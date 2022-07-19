import { Avatar, Card } from "antd";
import ProgressPoll from "components/ProgressPoll";
import React from "react";
import { QuestionType, User } from "utils/type";
const { Meta } = Card;
interface Props {
  poll: QuestionType;
  user: User;
}
function AnsweredPoll(props: Props) {
  const { poll, user } = props;
  const userAnswer = user.answers[poll.id];
  const answerOne = userAnswer === "optionOne";
  const answerTwo = userAnswer === "optionTwo";
  const { optionOne, optionTwo } = poll;
  const totalAnswers = optionOne.votes.length + optionTwo.votes.length;
  return (
    <div>
      <Card style={{ width: 500 }}>
        <p>Asked by {poll.author}</p>
        <Meta
          avatar={<Avatar src={poll.avatarURL} />}
          title="Results:"
          description={
            <>
              <ProgressPoll
                option={poll.optionOne}
                total={totalAnswers}
                answer={answerOne}
              />
              <ProgressPoll
                option={poll.optionTwo}
                total={totalAnswers}
                answer={answerTwo}
              />
            </>
          }
        />
      </Card>
    </div>
  );
}

export default AnsweredPoll;
