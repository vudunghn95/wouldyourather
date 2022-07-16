import React from "react";
import { Avatar, Button, Card } from "antd";
import { QuestionType } from "utils/type";
import { Link } from "react-router-dom";
const { Meta } = Card;

interface Props {
  questions: QuestionType[];
}

function Question(props: Props) {
  const { questions } = props;
  questions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return (
    <>
      {questions.map((question) => {
        return (
          <Card style={{ width: 500 }} key={question.id}>
            <p>{question.author} asks</p>
            <Meta
              avatar={<Avatar src={question.avatarURL} />}
              title="Would you rather"
              description={`..${question.optionOne.text.slice(0, 10)}...`}
            />
            <Button>
              <Link to={`/questions/${question.id}`}> View Poll</Link>
            </Button>
          </Card>
        );
      })}
    </>
  );
}

export default Question;
