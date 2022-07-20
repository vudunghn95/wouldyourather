import { createSlice } from "@reduxjs/toolkit";
import { QuestionType } from "utils/type";
import { RootState } from "../../app/store";

export interface PollState {
  question: QuestionType;
  isAnswered: boolean;
}

const initialState: PollState = {
  question: {
    id: "123",
    author: "",
    avatarURL: "",
    optionOne: {
      text: "",
      votes: [],
    },
    optionTwo: {
      text: "",
      votes: [],
    },
    timestamp: 0,
  },
  isAnswered: false,
};

export const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {
    updatePoll: (state, action) => {
      state.question = action.payload.question;
      state.isAnswered = action.payload.isAnswered;
    },
    updateAnswer: (state) => {
      state.isAnswered = true;
    },
  },
});

export const { updatePoll, updateAnswer } = pollSlice.actions;

export const selectPoll = (state: RootState) => {
  return {
    question: state.pollDetail.question,
    isAnswered: state.pollDetail.isAnswered,
  };
};

export default pollSlice.reducer;
