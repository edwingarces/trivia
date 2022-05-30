import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import Question from '../components/Question';
import Button from '../components/Button';
import Answers from '../components/Answers';
import AnswersRecord from '../components/Answers/AnswersRecord';
import { Question as QuestionType, questions } from '../initialState';
import { categorySelector, answersAtom, rightAnswersSelector } from '../recoil';
import { ReactComponent as Check } from '../assets/img/check.svg';
import { ReactComponent as Cancel } from '../assets/img/cancel.svg';
import { ReactComponent as ChevronRight } from '../assets/img/chevron-right.svg';
import shuffleArray from '../utils/shuffleArray';
import { useGetGlobalVar, useGlobal, useSetGlobalVar } from '../hooks/useGlobal';

type GlobalRecord = {
  userName: string
  rightAnswers: number
}

const Questions = () => {
  const [answered, setAnswered] = useState<boolean>(false);
  const [rightAnswer, setRightAnswer] = useState<boolean>(true);
  const [questionsSelected, setQuestions] = useState<QuestionType[]>(questions.placebo);
  const [counter, setCounter] = useState<number>(0);
  const history = useHistory();
  const setAnswers = useSetRecoilState(answersAtom);
  const category = useRecoilValue(categorySelector);
  const right = useRecoilValue(rightAnswersSelector);
  const setRecord = useSetGlobalVar('record');
  const userName = useGetGlobalVar('userName');
  const [globalRecord, setGlobalRecord] = useGlobal('globalRecord');

  let shuffled: QuestionType[] = questions.placebo;

  const handleAnswer = (answer: string) => {
    const isRightAnswer = questionsSelected[counter].answer.rightAnswer === answer;
    setRightAnswer(isRightAnswer);
    setAnswers((answers) => [...answers, isRightAnswer ? 1 : 0]);
    setRecord(right + 1);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    if (counter < questionsSelected.length - 1) {
      setCounter(counter + 1);
    } else {
      const unmutableGRecord = globalRecord as GlobalRecord[] || [];
      const newRecord = { userName, rightAnswers: right };
      unmutableGRecord.push(newRecord);
      setGlobalRecord(unmutableGRecord);
      history.push('/record');
    }
  };

  useEffect(() => {
    setAnswers([]);
    if (category) {
      switch (category) {
        case 'history':
          shuffled = shuffleArray(questions.history);
          break;
        case 'geography':
          shuffled = shuffleArray(questions.geography);
          break;
        default:
          shuffled = questions.placebo;
          break;
      }
      setQuestions(shuffled);
    }
  }, [category]);

  return (
    <div className="Questions row center-xs">
      {category
        && <AnswersRecord />}
      {answered
        ? (
          <div className="col-md-6 center">
            {rightAnswer
              ? (
                <Check style={{ width: '100px', fill: '#3FC1C9' }} />
              )
              : (
                <Cancel style={{ width: '100px', fill: '#FC5185' }} />
              )}
            <h1
              className="mt-6 mb-6"
              style={{
                textAlign: 'justify',
                color: 'white',
                fontSize: '16px',
              }}
            >
              {questionsSelected[counter].answer.description}
            </h1>
            <Button
              color="btn-green"
              onClick={handleNextQuestion}
            >
              Siguiente
              {' '}
              <ChevronRight style={{ width: '10px', fill: '#F5F5F5' }} />
            </Button>
          </div>
        )
        : (
          <>
            <Question>
              {questionsSelected[counter].question}
            </Question>
            <Answers
              options={questionsSelected[counter].options}
              onAnswer={handleAnswer}
            />
          </>
        )}
    </div>
  );
};

export default Questions;
