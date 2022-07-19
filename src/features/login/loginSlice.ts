import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "utils/type";
import { RootState } from "../../app/store";

export interface LoginState {
  isAuth: boolean;
  user: User;
}

const initialState: LoginState = {
  isAuth: false,
  user: {
    id: "",
    name: "",
    answers: {},
    questions: [],
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
        id: "",
        name: "",
        answers: {},
        questions: [],
      };
      state.isAuth = false;
    },
    auth: (state, action: PayloadAction<{ isAuth: boolean; user: User }>) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
  },
});

export const { logout, auth } = loginSlice.actions;

export const selectUser = (state: RootState) => {
  return state.login.user;
};
export const selectAuth = (state: RootState) => {
  return state.login.isAuth;
};

export default loginSlice.reducer;
