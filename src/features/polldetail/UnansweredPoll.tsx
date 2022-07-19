import React, { useState } from "react";
import { Avatar, Button, Card } from "antd";
import { QuestionType } from "utils/type";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { useAppDispatch } from "app/hooks";
const { Meta } = Card;
interface Props {
  poll: QuestionType;
  userId: string;
}
function UnansweredPoll(props: Props) {
  const [value, setValue] = useState("optionOne");
  const dispatch = useAppDispatch();
  const { poll, userId } = props;

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const answerPoll = () => {
    dispatch({
      type: "ANSWER_POLL",
      payload: {
        authedUser: userId,
        qid: poll.id,
        answer: value,
      },
    });
  };
  return (
    <div>
      <Card style={{ width: 500 }}>
        <p>{poll.author} asks</p>
        <Meta
          avatar={<Avatar src={poll.avatarURL} />}
          title="Would you rather ..."
          description={
            <Radio.Group onChange={onChange} value={value}>
              <Radio value="optionOne">{poll.optionOne.text}</Radio>
              <Radio value="optionTwo">{poll.optionTwo.text}</Radio>
            </Radio.Group>
          }
        />
        <Button onClick={answerPoll}>Submit </Button>
      </Card>
    </div>
  );
}

export default UnansweredPoll;
