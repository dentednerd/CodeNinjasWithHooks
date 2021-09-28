import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: '0',
    padding: '0',
    font: "normal 20px OpenDyslexicAlta-Regular",
    color: '$text'
  },

  body: {
    backgroundColor: '$background'
  },

  a: {
    textDecoration: 'none'
  },

  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    font: '100px Karate, sans-serif'
  }
});


export default globalStyles;
