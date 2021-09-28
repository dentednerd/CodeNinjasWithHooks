import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: '#eee',
      text: '#333',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 768px)',
  }
});
