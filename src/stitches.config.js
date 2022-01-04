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
      background: '#eeeeee',
      text: '#333333',
      accent: '#42537D',
      highlight: '#ffffff',
      sensei: '#B9BA57',
      senseilight: '#E0E18C',
      '0': '#BBBBBB',
      '1': '#BAB957',
      '2': '#BA9957',
      '3': '#5ECB65',
      '4': '#5A73AE',
      '5': '#8D56AE',
      '6': '#BA8457',
      '7': '#BA5A57',
      '8': '#666666',
    },
  },
  media: {
    bp1: '(min-width: 768px)',
  },
  shadows: {
    box: '0 0.5rem 1rem $text'
  }
});
