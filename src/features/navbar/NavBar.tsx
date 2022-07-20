import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useAppSelector } from "app/hooks";
import { logout, selectAuth, selectUser } from "features/login/loginSlice";
import { useDispatch } from "react-redux";

function NavBar() {
  const isAuth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  const items = [
    { label: <Link to="/">Home</Link>, key: "home" },
    { label: <Link to="/add">New Question</Link>, key: "add" },
    { label: <Link to="/leaderboard">Leader Board</Link>, key: "leader" },
  ];
  if (isAuth) {
    items.push(
      {
        label: (
          <span className="user-name">
            {`Hello, ${user.name}`} <img src={user.avatarURL} alt="avatar" />
          </span>
        ),
        key: "user",
      },
      {
        label: (
          <span className="user-name" onClick={logOut}>
            Logout
          </span>
        ),
        key: "logout",
      }
    );
  }

  return <Menu mode="horizontal" items={items} />;
}

export default NavBar;
