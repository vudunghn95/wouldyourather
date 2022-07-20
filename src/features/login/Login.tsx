import React, { useEffect, useState } from "react";
import { Button, Card, Select } from "antd";
import "./Login.css";
import { _getUsers } from "_DATA";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectAuth } from "./loginSlice";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
interface Users {
  id: string;
  name: string;
  avatarURL: string;
}

function Login() {
  const [users, setUsers] = useState<Users[]>([]);
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectAuth);
  const [selected, setSelected] = useState("Select User");
  const dispatch = useAppDispatch();
  const handleChange = (value: string) => {
    setSelected(value);
  };
  const signIn = () => {
    dispatch({
      type: "SIGN_IN",
      payload: selected,
    });
  };
  useEffect(() => {
    async function getUsers() {
      const res = await _getUsers();
      setUsers(Object.values(res));
    }
    getUsers();
    if (isAuth) {
      navigate(-2);
    }
  }, [isAuth, navigate]);
  return (
    <Card
      title="Welcome to the Would You Rather App!"
      extra={<p>Please sign in to continue</p>}
    >
      <img src={require("../../images/loginIcon.png")} alt="Login" />
      <h3>Sign in</h3>
      <Select onChange={handleChange} value={selected}>
        {users.map((user) => (
          <Option key={user.id} value={user.id}>
            <img src={user.avatarURL} alt="avatar" /> {user.name}
          </Option>
        ))}
      </Select>
      <Button type="primary" onClick={signIn}>
        Sign In
      </Button>
    </Card>
  );
}

export default Login;
