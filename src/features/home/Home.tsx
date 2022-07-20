import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./Home.css";
import { _getQuestions, _getUsers } from "_DATA";
import { useAppSelector } from "app/hooks";
import { selectUser } from "features/login/loginSlice";
import { filterAnsweredQuestionsByUser } from "utils/util";
import { QuestionType } from "utils/type";
import Question from "components/Question";
const { TabPane } = Tabs;

const onChange = (key: string) => {};
function Home() {
  const [answered, setAnswered] = useState<QuestionType[]>([]);
  const [unAnswered, setUnAnswered] = useState<QuestionType[]>([]);
  const user = useAppSelector(selectUser);
  useEffect(() => {
    async function getQuestions() {
      const users = await _getUsers();
      const res = await _getQuestions();
      const questions = Object.values(res).map((q: any) => {
        const user: any = Object.values(users).find(
          (user: any) => user.id === q.author
        );
        return {
          avatarURL: user.avatarURL,
          ...q,
        };
      });
      const { answered, unAnswered } = filterAnsweredQuestionsByUser(
        user,
        questions
      );
      setAnswered(answered);
      setUnAnswered(unAnswered);
    }
    getQuestions();
  }, [user]);

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Unanswered Questions" key="1">
        <Question questions={unAnswered} />
      </TabPane>
      <TabPane tab="Answered Questions" key="2">
        <Question questions={answered} />
      </TabPane>
    </Tabs>
  );
}

export default Home;
