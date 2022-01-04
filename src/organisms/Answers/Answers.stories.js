import Answers from '.';

export default {
  title: 'organisms/Answers',
  component: Answers,
  argTypes: {
    thisLevel: { type: 'object' },
    thisQuestion: { type: 'object' },
    showAnswers: { type: 'boolean' },
    setShowAnswers: { type: 'function' },
    handleCorrectAnswer: { type: 'function' }
  }
}

const Template = (args) => <Answers {...args} />;

export const Default = Template.bind({});
Default.args = {
  thisLevel: {
    levelNum: 0,
    levelName: 'Data Types',
    levelColor: '$0',
    levelTitleColor: '#333',
    levelAvatar: 'ninja.png',
    description: 'New ninjas learn about data in JavaScript. How many types of data are there?',
    nextBelt: 'white',
  },
  thisQuestion: {
    title: 'What\'s a string?',
    background: 'In JavaScript, we call text - words or sentences - a string. Strings need to have quote marks around them.',
    example: '"I am a string."\n\'I am also a string.\'\nBut I am not a string. ',
    question: 'Find the string!',
    answers: ['"Ninjas"', 34, 'true', 'name'],
    correct: '"Ninjas"',
    level: 0,
    questionNumber: 0
  },
  showAnswers: false,
  setShowAnswers: () => {},
  handleCorrectAnswer: () => {}
}
