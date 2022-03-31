import { Question } from '../initialState';

const historyQuestions: Array<Question> = [
  {
    question: '¿Quién fue el primer presidente de la democracia española tras el franquismo?',
    options: [
      'A. Juan Escutia',
      'B. Arnoldo Sánchez',
      'C. Adolfo Suárez',
      'D. Vicente Fernandez',
    ],
    answer: {
      rightAnswer: 2,
      description: 'Adolfo Suárez González fue un político y abogado español, presidente del Gobierno de España entre 1976 y 1981',
    },
  },
  {
    question: '¿La invasión de qué fortaleza por parte de los revolucionarios es considerada como el punto de inicio de la Revolución Francesa?',
    options: [
      'A. La Toma de la Bastilla',
      'B. La Guerra de los Pasteles',
      'C. La Batalla de Azcapotzalco',
      'D. La Toma de la Alhóndiga de Granaditas',
    ],
    answer: {
      rightAnswer: 0,
      description: 'La Toma de la Bastilla fue el punto de inflexión entre un mundo que agonizaba, el del Antiguo Régimen, y una nueva sociedad más libre e igualitaria',
    },
  },
  {
    question: '¿En qué año el hombre pisó la Luna por primera vez?',
    options: [
      'A. 1921',
      'B. 1970',
      'C. 1869',
      'D. 1969',
    ],
    answer: {
      rightAnswer: 3,
      description: 'La nave Apolo 11 llegó a la Luna en el año 1969, siendo ese año cuando Neil Armstrong dió “un pequeño paso para el hombre, un gran paso para la humanidad”',
    },
  },
];

export default historyQuestions;
