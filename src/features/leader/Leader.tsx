import React, { useEffect, useState } from "react";
import { Avatar, Card } from "antd";
import { _getUsers } from "_DATA";
import { User } from "utils/type";
const { Meta } = Card;
function Leader() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const result = await _getUsers();
    setUsers(Object.values(result));
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const filterUSers = users.map((user: User) => {
    const answers = Object.values(user.answers).length;
    const questions = user.questions.length;
    const total = answers + questions;
    return {
      answers,
      questions,
      total,
      name: user.name,
      avatar: user.avatarURL,
    };
  });
  filterUSers.sort((a, b) => b.total - a.total);
  return (
    <div>
      {filterUSers.map((u) => {
        return (
          <Card style={{ width: 500 }} key={u.name}>
            <p>{u.name}</p>
            <Meta
              avatar={<Avatar src={u.avatar} />}
              description={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "left" }}>
                    <h3>Answered questions : {u.answers}</h3>
                    <h3>Created questions : {u.questions}</h3>
                  </div>
                  <div style={{ marginLeft: 80 }}>
                    <h2 style={{ borderBottom: "1px solid gray" }}>Score</h2>
                    <h3
                      style={{
                        padding: 10,
                        backgroundColor: "#068e99",
                        color: "white",
                        borderRadius: "50%",
                      }}
                    >
                      {u.total}
                    </h3>
                  </div>
                </div>
              }
            />
          </Card>
        );
      })}
    </div>
  );
}

export default Leader;
