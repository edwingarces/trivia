import { Question } from '../initialState';

const geographyQuestions: Array<Question> = [
  {
    question: '¿Cuál es el río más caudaloso del mundo?',
    options: [
      'Amazonas',
      'Otro',
      'Titicaca',
      'Maya',
    ],
    answer: {
      rightAnswer: 'Amazonas',
      description: 'Si bien muchas personas lo confunden a veces con el más largo, el río más caudaloso del mundo es el Amazonas',
    },
  },
];

export default geographyQuestions;
