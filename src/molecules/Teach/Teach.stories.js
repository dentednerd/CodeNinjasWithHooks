import Teach from '.';

export default {
  title: 'molecules/Teach',
  component: Teach,
  argTypes: {
    thisQuestion: {
      type: 'object'
    }
  }
}

const Template = (args) => <Teach {...args} />;

export const Default = Template.bind({});
Default.args = {
  thisQuestion: {
    title: "What's a string?",
    background: "In JavaScript, we call text - words or sentences - a string. Strings need to have quote marks around them.",
  }
}
