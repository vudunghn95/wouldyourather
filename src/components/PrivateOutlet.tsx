import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/login/loginSlice";

function PrivateOutlet() {
  const isAuth = useAppSelector(selectAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
