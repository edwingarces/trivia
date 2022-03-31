import { Question } from '../initialState';

const geographyQuestions: Array<Question> = [
  {
    question: '¿Cuál es el río más caudaloso del mundo?',
    options: [
      'A. Amazonas',
      'B. Otro',
      'C. Titicaca',
      'D. Maya',
    ],
    answer: {
      rightAnswer: 0,
      description: 'Si bien muchas personas lo confunden a veces con el más largo, el río más caudaloso del mundo es el Amazonas',
    },
  },
];

export default geographyQuestions;
