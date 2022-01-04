import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    pad: {
      type: 'boolean'
    },
    color: {
      type: 'string'
    },
    children: {
      type: 'string'
    }
  }
}

const Template = (args) =>  (
  <Button {...args}>
    {args.children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  pad: true,
  color: '$sensei',
  children: 'Button'
}
