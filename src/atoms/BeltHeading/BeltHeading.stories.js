import BeltHeading from '.';

export default {
  title: 'atoms/BeltHeading',
  component: BeltHeading,
  argTypes: {
    levelNum: {
      type: 'number'
    },
    text: {
      type: 'string'
    }
  }
}

const Template = (args) => <BeltHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  levelNum: 0,
  text: 'Data Types'
}
