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
      background: '#e0f1f1',
      text: '#333333',
      accent: '#388D90',
      highlight: '#ffffff'
    },
  },
  media: {
    bp1: '(min-width: 768px)',
  },
  shadows: {
    box: '0 0.5rem 1rem $accent'
  }
});
