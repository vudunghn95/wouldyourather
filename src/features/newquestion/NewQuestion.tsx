import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUser } from "features/login/loginSlice";
import { useNavigate } from "react-router-dom";
function NewQuestion() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const createNewQuestion = () => {
    if (!first || !second) {
      alert("Please fill in the option");
      return;
    }
    dispatch({
      type: "CREATE_QUESTION",
      payload: {
        optionOneText: first,
        optionTwoText: second,
        author: user.id,
      },
    });
    navigate("/");
  };
  return (
    <Card style={{ width: 500 }}>
      <p style={{ textAlign: "center" }}> Create New Question </p>
      <h3>Would you rather ...</h3>
      <Input
        placeholder="Enter Option One Text Here"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <h3> OR</h3>
      <Input
        placeholder="Enter Option Two Text Here"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <br /> <br />
      <Button onClick={createNewQuestion}>Submit</Button>
    </Card>
  );
}

export default NewQuestion;
