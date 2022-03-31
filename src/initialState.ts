import historyQuestions from './utils/historyQuestions';
import geographyQuestions from './utils/geographyQuestions';

export type Answer = {
  rightAnswer: number
  description: string
}

export type Question = {
  question: string
  options: Array<string>
  answer: Answer
}

export const questions = {
  placebo: [
    {
      question: '',
      options: [''],
      answer: {
        rightAnswer: 0,
        description: '',
      },
    },
  ],
  history: historyQuestions,
  geography: geographyQuestions,
};

export const SomeOtherThing = 0;
