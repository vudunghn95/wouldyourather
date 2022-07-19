export interface User {
  id: string;
  name: string;
  answers: IObjectKeys;
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

export type Option = {
  text: string;
  votes: string[];
};
interface IObjectKeys {
  [key: string]: string | number;
}
