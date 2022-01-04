import { withReactContext } from 'storybook-react-context';

import globalStyles from '../src/globalStyles';
import '../src/fonts.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withReactContext({
    initialState: {
      user: {
        "avatar": "https://pbs.twimg.com/media/BI97ZrOCAAEmd0c.jpg",
        "name": "Brian",
        "level": 0,
        "username": "ninjabrian"
        }
    }
  }),
  (Story) => {
    globalStyles();
    return (
      <main>
        <Story />
      </main>
    );
  }
];
