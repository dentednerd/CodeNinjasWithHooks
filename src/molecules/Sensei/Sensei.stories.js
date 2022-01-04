import Sensei from '.';

export default {
  title: 'molecules/Sensei',
  component: Sensei,
  argTypes: {
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    }
  }
}

const Template = (args) => <Sensei {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "What's a data type?",
  subtitle: "Sensei Says..."
}
