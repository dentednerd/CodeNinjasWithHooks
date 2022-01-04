import Avatar from '.';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
  argTypes: {
    user: {
      type: 'object'
    }
  }
}

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    "avatar": "https://pbs.twimg.com/media/BI97ZrOCAAEmd0c.jpg",
    "name": "Brian",
    "level": 0,
    "username": "ninjabrian"
  }
}
