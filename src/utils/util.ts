import { _getUsers } from "_DATA";
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
