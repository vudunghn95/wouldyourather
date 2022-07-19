import { _getQuestions, _getUsers } from "_DATA";
import { QuestionType, User } from "./type";

export async function checkUser(id: string | null) {
  const users: User[] = await _getUsers();
  const user = Object.values(users).find((user) => user.id === id);
  if (user) {
    return {
      isAuth: true,
      user,
    };
  } else {
    return {
      isAuth: false,
      user: null,
    };
  }
}

export function filterAnsweredQuestionsByUser(
  user: User,
  questions: QuestionType[]
) {
  const { answers } = user;
  const answered = questions.filter((question) =>
    Object.keys(answers).includes(question.id)
  );
  const unAnswered = questions.filter(
    (question) => !Object.keys(answers).includes(question.id)
  );
  return {
    answered,
    unAnswered,
  };
}

export async function getQuestionById(id: string, user: User) {
  const { answers } = user;
  const isAnswered = Object.keys(answers).includes(id);
  const questions = await _getQuestions();
  const users = await _getUsers();
  let question: any = Object.values(questions).find((q: any) => q.id === id);
  const author: any = Object.values(users).find(
    (u: any) => u.id === question.author
  );
  question = {
    ...question,
    avatarURL: author.avatarURL,
  };
  return {
    question,
    isAnswered,
  };
}

export async function getUserById(id: string) {
  const users = await _getUsers();
  const user: any = Object.values(users).find(
    (u: any) => u.id === id
  );
  return user;
}