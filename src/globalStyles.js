import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: '0',
    padding: '0',
    fontFamily: "'OpenDyslexicAlta-Regular', sans-serif",
    fontSize: '20px',
    lineHeight: '24px',
    color: '$text'
  },

  body: {
    backgroundColor: '$background'
  },

  a: {
    textDecoration: 'none'
  },

  main: {
    maxWidth: '768px',
    margin: '5rem auto 1rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    font: '2rem Karate, sans-serif'
  },

  p: {
    marginBottom: '1.2rem'
  }
});


export default globalStyles;
