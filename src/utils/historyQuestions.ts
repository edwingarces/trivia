import { Question } from '../initialState';

const historyQuestions: Array<Question> = [
  {
    question: '¿Quién fue el primer presidente de la democracia española tras el franquismo?',
    options: [
      'Juan Escutia',
      'Arnoldo Sánchez',
      'Adolfo Suárez',
      'Vicente Fernandez',
    ],
    answer: {
      rightAnswer: 'Adolfo Suárez',
      description: 'Adolfo Suárez González fue un político y abogado español, presidente del Gobierno de España entre 1976 y 1981',
    },
  },
  {
    question: '¿La invasión de qué fortaleza por parte de los revolucionarios es considerada como el punto de inicio de la Revolución Francesa?',
    options: [
      'La Toma de la Bastilla',
      'La Guerra de los Pasteles',
      'La Batalla de Azcapotzalco',
      'La Toma de la Alhóndiga de Granaditas',
    ],
    answer: {
      rightAnswer: 'La Toma de la Bastilla',
      description: 'La Toma de la Bastilla fue el punto de inflexión entre un mundo que agonizaba, el del Antiguo Régimen, y una nueva sociedad más libre e igualitaria',
    },
  },
  {
    question: '¿En qué año el hombre pisó la Luna por primera vez?',
    options: [
      '1921',
      '1970',
      '1869',
      '1969',
    ],
    answer: {
      rightAnswer: '1969',
      description: 'La nave Apolo 11 llegó a la Luna en el año 1969, siendo ese año cuando Neil Armstrong dió “un pequeño paso para el hombre, un gran paso para la humanidad”',
    },
  },
  {
    question: '¿Cuál fue el primer país en aprobar el sufragio femenino?',
    options: [
      'México',
      'España',
      'Nueva Zelanda',
      'Estados Unidos',
    ],
    answer: {
      rightAnswer: 'Nueva Zelanda',
      description: 'El 19 de septiembre de 1893 se aprobó en Nueva Zelanda el primer sufragio femenino sin restricciones en el que se incluía también a las mujeres maoríes. Esta nueva y revolucionaria circunstancia permitía a las mujeres de todas las razas votar pero no presentarse a elecciones.',
    },
  },
  {
    question: '¿Qué importante batalla tuvo lugar en 1815?',
    options: [
      'La batalla de Waterloo',
      'La batalla de Verdún',
      'La batalla de Moscú',
      'La batalla de Berlín',
    ],
    answer: {
      rightAnswer: 'La batalla de Waterloo',
      description: 'La batalla de Waterloo fue un enfrentamiento armado entre el ejército napoleónico y la Séptima Coalición. Tuvo lugar el 18 de junio de 1815 en las proximidades de la localidad de Waterloo, al sur de Bruselas, en la actual Bélgica.',
    },
  },
  {
    question: '¿Cuál era la ciudad hogar de Marco Polo?',
    options: [
      'Venecia',
      'Roma',
      'Florencia',
      'Polonia',
    ],
    answer: {
      rightAnswer: 'Venecia',
      description: 'En 1271, el joven Marco Polo partió de su Venecia natal para acompañar a su padre y a su tío en un fabuloso viaje a través de Asia, hasta la corte de Kublai Kan en China.',
    },
  },
  {
    question: '¿En qué año tuvo lugar el genocidio de Ruanda?',
    options: [
      '1994',
      '1984',
      '1894',
      '1974',
    ],
    answer: {
      rightAnswer: '1994',
      description: 'El genocidio de Ruanda fue un intento de exterminio de la población Tutsi por parte del gobierno hegemónico Hutu de Ruanda entre el 7 de abril y el 15 de julio de 1994.',
    },
  },
  {
    question: '¿Qué reina británica fue hija de los Reyes Católicos?',
    options: [
      'Catalina de Aragón',
      'Elizabeth II',
      'Ana Estuardo',
      'Mary Tudor',
    ],
    answer: {
      rightAnswer: 'Catalina de Aragón',
      description: 'Catalina de Aragón y Castilla, o Catalina de Trastámara y Trastámara fue reina consorte de Inglaterra desde 1509 hasta 1533 como la primera esposa del rey Enrique VIII y madre de María I de Inglaterra.',
    },
  },
  {
    question: '¿Por qué nombre se conocía a la traductora e intérprete del conquistador Hernán Cortés en tierras aztecas?',
    options: [
      'Malinche',
      'Nochipa',
      'Mixtli',
      'Tlapaltic',
    ],
    answer: {
      rightAnswer: 'Malinche',
      description: 'Indígena mesoamericana. Intérprete y compañera de Hernán Cortés, desempeñó un importante papel en el proceso de conquista de México.',
    },
  },
  {
    question: '¿En qué año se disolvió la Unión Soviética?',
    options: [
      '1991',
      '2001',
      '1999',
      '1990',
    ],
    answer: {
      rightAnswer: '1991',
      description: 'Fue el fallido intento de golpe de Estado contra Gorbachov, ocurrido entre el 19 y el 21 de agosto de 1991, lo que aceleró el proceso de desintegración de la URSS. El 25 de diciembre la disolución fue oficial.',
    },
  },
  {
    question: '¿Qué carabela no regresó del primer viaje de Colón al Nuevo Mundo?',
    options: [
      'La Santa María',
      'La Niña',
      'La Pinta',
      'La Santa Isabel',
    ],
    answer: {
      rightAnswer: 'La Santa María',
      description: 'La Santa María no retornó a España al embarrancar en la isla Española en diciembre de 1492 ya que sus restos sirvieron para construir el Fuerte Navidad, el primer asentamiento español en el Nuevo Mundo.',
    },
  },
  {
    question: '¿Qué país africano fue fundado por esclavos americanos liberados en 1847?',
    options: [
      'Liberia',
      'Nigeria',
      'Senegal',
      'Sudáfrica',
    ],
    answer: {
      rightAnswer: 'Liberia',
      description: 'El nombre Liberia deriva de la palabra latina "liber" que significa "libre". El topónimo está relacionado con el origen del Estado liberiano, un territorio comprado a Sierra Leona en el siglo XIX para repatriar al continente africano a personas esclavizadas y posteriormente libertas en los Estados Unidos.',
    },
  },
  {
    question: '¿Cómo se conocía la Primera Guerra Mundial antes de que estallara la segunda?',
    options: [
      'La Gran Guerra',
      'La Guerra',
      'La Primera Guerra mundial',
      'La Guerra Alemana',
    ],
    answer: {
      rightAnswer: 'La Gran Guerra',
      description: 'El 11 de Noviembre de 1918 la mayor tragedia que la humanidad había vivido hasta aquel momento concluía. Millones de muertos, heridos, inválidos... Millones en pérdidas económicas. Rencor, dolor, desolación. Se trataba de construir un nuevo mundo que hiciera que la Gran Guerra, como se proclamaba en aquel momento, fuera "la guerra que pusiera fin a todas las guerras".',
    },
  },
  {
    question: '¿Cuál fue el segundo país americano en conseguir la independencia?',
    options: [
      'Haití',
      'México',
      'Argentina',
      'Guatemala',
    ],
    answer: {
      rightAnswer: 'Haití',
      description: 'La revolución haitiana fue el primer movimiento revolucionario de América Latina​ que culminó con la abolición de la esclavitud en la colonia francesa de Saint-Domingue y la proclamación del Primer Imperio de Haití.',
    },
  },
  {
    question: '¿Cuál es la narración épica más antigua de la historia?',
    options: [
      'La Epopeya de Gilgamesh',
      'Ilíada y Odisea de Homero',
      'La Eneida',
      'El Mahabharata',
    ],
    answer: {
      rightAnswer: 'La Epopeya de Gilgamesh',
      description: 'Fue descubierta en unas tablillas de arcilla donde se había usado la escritura cuneiforme, es decir, picando en piedra. Fue escrita en Mesopotamia en el año 2100 a.C.',
    },
  },
  {
    question: '¿Quién era el emperador de Roma cuando murió Jesús de Nazaret?',
    options: [
      'Tiberio',
      'Herodes "El grande"',
      'Poncio Pilato',
      'Herodes Antipas',
    ],
    answer: {
      rightAnswer: 'Tiberio',
      description: 'Tiberio Julio César Augusto​ fue el segundo emperador romano, gobernando desde el 17 de septiembre del año 14 hasta su muerte.​​​Era hijo de Tiberio Claudio Nerón y Livia Drusila, miembro por tanto de la gens Claudia.',
    },
  },
  {
    question: '¿Qué batalla marítima tuvo lugar en el año 1805?',
    options: [
      'La Batalla de Trafalgar',
      'La Batalla de Salamin',
      'La Batalla de Accio',
      'LA Batalla del Nilo',
    ],
    answer: {
      rightAnswer: 'La Batalla de Trafalgar',
      description: 'La Batalla de Trafalgar, acaecida el 21 de octubre de 1805 frente al cabo de la costa gaditana, enfrentó a Gran Bretaña con la Francia napoleónica y su aliada España.',
    },
  },
];

export default historyQuestions;
