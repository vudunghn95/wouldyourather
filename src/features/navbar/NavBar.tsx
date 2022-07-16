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
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="add">
        <Link to="/add">New Question</Link>
      </Menu.Item>
      <Menu.Item key="leader">
        <Link to="/leaderboard">Leader Board</Link>
      </Menu.Item>
      {isAuth && (
        <>
          <Menu.Item className="user-name" key="user">
            {`Hello, ${user.name}`} <img src={user.avatarURL} alt="avatar" />
          </Menu.Item>
          <Menu.Item key="logout" className="user-name" onClick={logOut}>
            Logout
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}

export default NavBar;
