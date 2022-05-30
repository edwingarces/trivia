import { GeographyQuestions, HistoryQuestions } from './utils/questions';

export type Answer = {
  rightAnswer: string
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
        rightAnswer: '',
        description: '',
      },
    },
  ],
  history: HistoryQuestions,
  geography: GeographyQuestions,
};

export const SomeOtherThing = 0;
