import React from "react";
import { Progress, Badge } from "antd";
import { Option } from "../utils/type";
interface Props {
  option: Option;
  total: number;
  answer: boolean;
}

function ProgressPoll(props: Props) {
  const { option, total, answer } = props;
  const votesAmount = option.votes.length;
  return (
    <Badge count={answer ? "Your Vote" : 0} color="volcano">
      <div
        style={{
          border: "1px solid #f0f0f0",
          marginBottom: 10,
          padding: 5,
        }}
      >
        <p style={{ textAlign: "left", fontWeight: "bold" }}>
          Would you rather {option.text}
        </p>
        <Progress
          percent={+((votesAmount / total) * 100).toFixed(2)}
          size="small"
          status="active"
        />
        <b>
          {votesAmount} out of {total} votes
        </b>
      </div>
    </Badge>
  );
}

export default ProgressPoll;
