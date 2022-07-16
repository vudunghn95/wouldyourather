export interface User {
  id: string;
  name: string;
  answers: object;
  avatarURL?: string;
}

export interface QuestionType {
  id: string;
  author: string;
  optionOne: Option;
  optionTwo: Option;
  timestamp: number;
  avatarURL?: string;
}

type Option = {
  text: string;
  votes: string[];
};
