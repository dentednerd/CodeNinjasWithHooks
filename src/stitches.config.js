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
      highlight: '#ffffff',
      sensei: '#B9BA57',
      senseilight: '#E0E18C'
    },
  },
  media: {
    bp1: '(min-width: 768px)',
  },
  shadows: {
    box: '0 0.5rem 1rem $accent'
  }
});
