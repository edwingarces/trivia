import { selector } from 'recoil';
import { userNameAtom } from '.';
import { categoryAtom, answersAtom } from './atoms';

export const categorySelector = selector({
  key: 'categorySelector',
  get: ({ get }) => (
    get(categoryAtom)
  ),
});

export const rightAnswersSelector = selector({
  key: 'rightAnswerSelector',
  get: ({ get }) => {
    const answers = get(answersAtom);
    const rightAnswers = answers.filter((answer) => answer === 1);
    return rightAnswers.length;
  },
});

export const wrongAnswersSelector = selector({
  key: 'wrongAnswerSelector',
  get: ({ get }) => {
    const answers = get(answersAtom);
    const wrongAnswers = answers.filter((answer) => answer === 0);
    return wrongAnswers.length;
  },
});

export const userName = selector({
  key: 'userNameSelector',
  get: ({ get }) => (
    get(userNameAtom)
  ),
});
